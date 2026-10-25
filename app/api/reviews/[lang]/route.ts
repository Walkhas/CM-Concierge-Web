import { NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n/config";
import { isServiceCategory } from "@/content/services";

const MAX_REVIEW_REQUEST_BYTES = 16 * 1024;
class RequestBodyTooLargeError extends Error {}

async function readBoundedBody(request: Request): Promise<string> {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_REVIEW_REQUEST_BYTES) {
        try {
          await reader.cancel();
        } catch {
          // The request is already being rejected; cancellation is best effort.
        }
        throw new RequestBodyTooLargeError();
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}

function clean(value: unknown) { return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : ""; }

export async function POST(request: Request, { params }: { params: Promise<{ lang: string }> }) {
  try {
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number.isFinite(Number(contentLength)) && Number(contentLength) > MAX_REVIEW_REQUEST_BYTES) {
      return NextResponse.json({ error: "invalid" }, { status: 413 });
    }

    const { lang } = await params;
    const rawBody = await readBoundedBody(request);
    const body = JSON.parse(rawBody) as Record<string, unknown>;
    const name = clean(body.name), comment = clean(body.comment), rating = Number(body.rating);
    const service = body.service === "" ? null : body.service;
    if (!isLocale(lang) || name.length < 2 || name.length > 80 || comment.length < 10 || comment.length > 1200 || !Number.isInteger(rating) || rating < 1 || rating > 5 || body.publicDisplayConsent !== true || body.website !== "" || (service !== null && (typeof service !== "string" || !isServiceCategory(service)))) return NextResponse.json({ error: "invalid" }, { status: 400 });
    const { url, key } = { url: process.env.NEXT_PUBLIC_SUPABASE_URL, key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY };
    if (!url || !key) return NextResponse.json({ error: "unavailable" }, { status: 503 });
    const response = await fetch(`${url}/rest/v1/rpc/submit_review`, { method: "POST", headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify({ p_name: name, p_rating: rating, p_comment: comment, p_service: service, p_language: lang, p_public_display_consent: true }) });
    return response.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "unavailable" }, { status: 503 });
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) {
      return NextResponse.json({ error: "invalid" }, { status: 413 });
    }
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
}
