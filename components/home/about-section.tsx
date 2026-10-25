import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function AboutSection({ content }: { content: Dictionary["about"] }) {
  return (
    <Section className="bg-brand-primary-dark text-white" id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1fr] lg:gap-20">
          <div className="order-1">
            <SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} tone="light" />
            <ul className="mt-8 grid gap-4 border-t border-white/20 pt-6">
              {content.points.map((point) => <li className="flex items-start gap-3 text-brand-light" key={point}><span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-accent-sand" />{point}</li>)}
            </ul>
            <ButtonLink className="mt-8" href={content.consultation.href}>{content.consultation.label}</ButtonLink>
          </div>
          <div className="relative order-2 mx-auto w-full max-w-xl lg:order-2">
            <div aria-hidden="true" className="absolute -inset-3 rounded-card border border-accent-sand/40 lg:-inset-5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-soft sm:aspect-[5/4]">
              <Image alt={content.imageAlt} className="object-cover object-[center_42%]" fill sizes="(max-width: 1024px) 100vw, 48vw" src="/images/home/lifestyle-merida.jpeg" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
