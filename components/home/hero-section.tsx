import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HeroSection({ content }: { content: Dictionary["hero"] }) {
  return (
    <Section className="relative overflow-hidden bg-brand-primary-dark text-white">
      <div className="relative lg:min-h-[34rem]">
        <div className="hero-image-integrated relative aspect-[4/3] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[68%]">
          <Image alt={content.imageAlt} className="object-cover object-[center_56%]" fill priority sizes="(max-width: 1024px) 100vw, 68vw" src="/images/home/hero-merida.jpg" />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-primary-dark/15 lg:hidden" />
        </div>
        <Container className="relative">
          <div className="flex min-h-[26rem] items-end pb-10 pt-10 sm:min-h-[30rem] sm:pb-14 lg:min-h-[34rem] lg:w-[52%] lg:items-center lg:py-16">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{content.eyebrow}</p>
              <h1 className="mt-5 max-w-lg font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-light sm:text-xl">{content.description}</p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href={content.primary.href}>{content.primary.label}</ButtonLink>
                <ButtonLink className="border-white/50 text-white hover:bg-white/10" href={content.secondary.href} variant="secondary">{content.secondary.label}</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
