import { notFound } from "next/navigation";

import { ConsultationBooking } from "@/components/booking/consultation-booking";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

export default async function BookConsultationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dictionary = getDictionary(locale);

  return <><SiteHeader locale={locale} content={dictionary.header} /><main><section className="bg-brand-surface py-16 sm:py-24"><Container><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">{dictionary.booking.eyebrow}</p><h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-6xl">{dictionary.booking.title}</h1><p className="mt-6 text-lg leading-relaxed text-brand-muted">{dictionary.booking.intro}</p><div className="mt-10 grid gap-8 text-left md:grid-cols-2"><div><h2 className="font-display text-2xl text-brand-dark">{dictionary.booking.whatToExpectTitle}</h2><ul className="mt-4 grid gap-3 text-brand-muted">{dictionary.booking.whatToExpect.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-accent-sand" />{item}</li>)}</ul></div><div><h2 className="font-display text-2xl text-brand-dark">{dictionary.booking.afterBookingTitle}</h2><p className="mt-4 leading-relaxed text-brand-muted">{dictionary.booking.afterBooking}</p></div></div></div></Container></section><ConsultationBooking content={dictionary.booking} /></main><SiteFooter locale={locale} content={dictionary.footer} /></>;
}
