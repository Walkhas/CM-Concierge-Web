import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection({ content }: { content: Dictionary["about"] }) {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><ul className="mt-8 grid gap-3">{content.points.map((point) => <li className="flex items-center gap-3 text-brand-dark" key={point}><span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />{point}</li>)}</ul></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image alt={content.imageAlt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 45vw" src="/images/home/lifestyle-merida.jpeg" /></div>
        </div>
      </Container>
    </Section>
  );
}
