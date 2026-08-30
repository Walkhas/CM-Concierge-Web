import Image from "next/image";

import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "./language-switcher";

export function SiteFooter({ locale, content }: { locale: Locale; content: Dictionary["footer"] }) {
  return (
    <footer className="bg-brand-primary-dark py-14 text-brand-light" id="contact">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image alt="C&M Concierge" className="h-20 w-20 rounded-full object-cover" height={1600} src="/brand/logo.jpeg" width={1600} />
            <p className="mt-5 max-w-sm text-base leading-relaxed">{content.description}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-white">{content.contactLabel}</h2>
            <div className="mt-4 grid gap-2 text-sm">
              <a className="underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>{content.emailLabel}: {site.contact.email}</a>
              <a className="underline-offset-4 hover:underline" href={site.contact.whatsappHref}>{content.phoneLabel}: {site.contact.phone}</a>
              <a className="underline-offset-4 hover:underline" href={site.contact.facebookHref} rel="noreferrer" target="_blank">{content.facebookLabel}</a>
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl text-white">{content.locationLabel}</h2>
            <p className="mt-4 text-sm">{content.location}</p>
            <div className="mt-6"><LanguageSwitcher label={content.socialLabel} locale={locale} /></div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/20 pt-6 text-xs text-brand-light/80">{content.copyright}</p>
      </Container>
    </footer>
  );
}
