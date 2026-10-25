import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ReviewForm } from "@/components/reviews/review-form";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

export default async function LeaveReview({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dictionary = getDictionary(locale);
  return <Section><Container className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary-dark">{dictionary.reviews.eyebrow}</p><h1 className="mt-3 font-display text-4xl text-brand-dark sm:text-5xl">{dictionary.reviews.title}</h1><p className="mt-5 text-lg text-brand-muted">{dictionary.reviews.description}</p><ReviewForm locale={locale} content={dictionary.reviews} /></Container></Section>;
}
