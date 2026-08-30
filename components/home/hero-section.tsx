import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HeroSection({ content }: { content: Dictionary["hero"] }) {
  return (
    <Section className="bg-brand-primary-dark text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{content.eyebrow}</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">{content.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-light sm:text-xl">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={content.primary.href}>{content.primary.label}</ButtonLink>
              <ButtonLink className="border-white/50 text-white hover:bg-white/10" href={content.secondary.href} variant="secondary">{content.secondary.label}</ButtonLink>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-card shadow-soft lg:order-2">
            <Image alt={content.imageAlt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 55vw" src="/images/home/hero-merida.jpg" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
