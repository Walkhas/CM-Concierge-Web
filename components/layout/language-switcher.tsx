import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div aria-label={label} className="flex items-center gap-1 text-sm font-semibold" role="navigation">
      <Link aria-current={locale === "en" ? "page" : undefined} className={`rounded-control px-2 py-1 ${locale === "en" ? "bg-brand-primary-dark text-white" : "text-brand-primary-dark hover:bg-secondary"}`} href="/en">
        EN
      </Link>
      <span aria-hidden="true" className="text-brand-muted">/</span>
      <Link aria-current={locale === "es" ? "page" : undefined} className={`rounded-control px-2 py-1 ${locale === "es" ? "bg-brand-primary-dark text-white" : "text-brand-primary-dark hover:bg-secondary"}`} href="/es">
        ES
      </Link>
    </div>
  );
}
