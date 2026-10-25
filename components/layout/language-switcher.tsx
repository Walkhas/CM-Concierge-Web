"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { consultationPathByLocale } from "@/lib/i18n/routes";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const onConsultationPage = pathname.endsWith("/book-consultation") || pathname.endsWith("/reservar-consulta");
  const destination = (targetLocale: Locale) => onConsultationPage ? consultationPathByLocale[targetLocale] : `/${targetLocale}`;

  return (
    <div aria-label={label} className="flex items-center gap-1 text-sm font-semibold" role="navigation">
      <Link aria-current={locale === "en" ? "page" : undefined} className={`rounded-control px-2 py-1 ${locale === "en" ? "bg-brand-primary-dark text-white" : "text-brand-primary-dark hover:bg-secondary"}`} href={destination("en")}>
        EN
      </Link>
      <span aria-hidden="true" className="text-brand-muted">/</span>
      <Link aria-current={locale === "es" ? "page" : undefined} className={`rounded-control px-2 py-1 ${locale === "es" ? "bg-brand-primary-dark text-white" : "text-brand-primary-dark hover:bg-secondary"}`} href={destination("es")}>
        ES
      </Link>
    </div>
  );
}
