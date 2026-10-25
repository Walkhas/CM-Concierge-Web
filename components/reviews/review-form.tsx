"use client";
import { FormEvent, useState } from "react";
import { serviceCategories } from "@/content/services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/content/types";
import { Button } from "@/components/ui/button";

export function ReviewForm({ locale, content }: { locale: Locale; content: Dictionary["reviews"] }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setState("loading"); const form = new FormData(event.currentTarget); try { const response = await fetch(`/api/reviews/${locale}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.get("name"), rating: Number(form.get("rating")), service: form.get("service"), comment: form.get("comment"), publicDisplayConsent: form.get("consent") === "on", website: form.get("website") }) }); setState(response.ok ? "success" : "error"); if (response.ok) event.currentTarget.reset(); } catch { setState("error"); } }
  return <form onSubmit={submit} className="mt-8 grid gap-5" aria-describedby="review-status">
     <div className="absolute -left-[10000px]" aria-hidden="true"><label htmlFor="review-website">Website<input id="review-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="grid gap-2 text-sm font-semibold" htmlFor="review-name">{content.nameLabel}<input id="review-name" name="name" required maxLength={80} className="rounded-control border border-border bg-surface px-4 py-3 font-normal" /></label>
    <label className="grid gap-2 text-sm font-semibold" htmlFor="review-rating">{content.ratingLabel}<select id="review-rating" name="rating" required defaultValue="" className="rounded-control border border-border bg-surface px-4 py-3 font-normal"><option value="" disabled>{content.ratingPlaceholder}</option>{[1,2,3,4,5].map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
    <label className="grid gap-2 text-sm font-semibold" htmlFor="review-service">{content.serviceLabel}<select id="review-service" name="service" defaultValue="" className="rounded-control border border-border bg-surface px-4 py-3 font-normal"><option value="">{content.servicePlaceholder}</option>{serviceCategories.map((service) => <option key={service.value} value={service.value}>{service[locale]}</option>)}</select></label>
    <label className="grid gap-2 text-sm font-semibold" htmlFor="review-comment">{content.commentLabel}<textarea id="review-comment" name="comment" required minLength={10} maxLength={1200} rows={6} className="rounded-control border border-border bg-surface px-4 py-3 font-normal" /></label>
    <label className="flex gap-3 text-sm"><input name="consent" type="checkbox" required className="mt-1 size-4 accent-brand-primary" /> <span>{content.consentLabel} <span className="text-brand-muted">({content.consentVersion})</span></span></label>
    <Button type="submit" disabled={state === "loading"}>{state === "loading" ? content.loading : content.submit}</Button>
    <p id="review-status" role="status" aria-live="polite" className={state === "error" ? "text-red-700" : "text-brand-primary-dark"}>{state === "success" ? content.success : state === "error" ? content.error : ""}</p>
  </form>;
}
