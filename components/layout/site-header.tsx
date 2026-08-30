import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader({ locale, content }: { locale: Locale; content: Dictionary["header"] }) {
  return (
    <header className="border-b border-border bg-brand-surface/95">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link aria-label={content.homeLabel} className="shrink-0" href={`/${locale}`}>
          <Image alt="C&M Concierge" className="h-14 w-14 rounded-full object-cover" height={1600} src="/brand/logo.jpeg" width={1600} />
        </Link>
        <details className="relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-control border border-primary px-4 text-sm font-semibold text-brand-primary-dark">{content.menuLabel}</summary>
          <nav className="absolute right-0 top-14 z-10 grid min-w-56 gap-2 rounded-card border bg-brand-surface p-4 shadow-soft" aria-label={content.navigationLabel}>
            <Link className="rounded-control px-3 py-2 hover:bg-secondary" href="#about">{content.nav.about}</Link>
            <Link className="rounded-control px-3 py-2 hover:bg-secondary" href="#services">{content.nav.services}</Link>
            <Link className="rounded-control px-3 py-2 hover:bg-secondary" href="#process">{content.nav.process}</Link>
            <Link className="rounded-control px-3 py-2 hover:bg-secondary" href="#contact">{content.nav.contact}</Link>
            <LanguageSwitcher label={content.languageLabel} locale={locale} />
            <ButtonLink href={content.consultation.href}>{content.consultation.label}</ButtonLink>
          </nav>
        </details>
        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label={content.navigationLabel} className="flex items-center gap-5 text-sm font-semibold text-brand-dark">
            <Link className="hover:text-brand-primary" href="#about">{content.nav.about}</Link>
            <Link className="hover:text-brand-primary" href="#services">{content.nav.services}</Link>
            <Link className="hover:text-brand-primary" href="#process">{content.nav.process}</Link>
            <Link className="hover:text-brand-primary" href="#contact">{content.nav.contact}</Link>
          </nav>
          <LanguageSwitcher label={content.languageLabel} locale={locale} />
          <ButtonLink className="whitespace-nowrap" href={content.consultation.href}>{content.consultation.label}</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
