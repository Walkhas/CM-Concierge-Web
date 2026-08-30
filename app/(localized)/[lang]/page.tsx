import { notFound } from "next/navigation";

import { AboutSection } from "@/components/home/about-section";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

export default async function LocalizedHome({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dictionary = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} content={dictionary.header} />
      <main>
        <HeroSection content={dictionary.hero} />
        <AboutSection content={dictionary.about} />
        <ServicesSection content={dictionary.services} />
        <HowItWorksSection content={dictionary.howItWorks} />
        <TestimonialsSection content={dictionary.testimonials} />
        <ConsultationCta content={dictionary.finalCta} />
      </main>
      <SiteFooter locale={locale} content={dictionary.footer} />
    </>
  );
}
