import { NextResponse, type NextRequest } from "next/server";

function prefersSpanish(header: string | null) {
  return (header ?? "")
    .toLowerCase()
    .split(",")
    .map((part) => part.trim().split(";", 1)[0])
    .some((language) => language === "es" || language.startsWith("es-"));
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const locale = prefersSpanish(request.headers.get("accept-language"))
    ? "es"
    : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"]
};
