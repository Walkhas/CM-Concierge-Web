import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "./service-card";

export function ServicesSection({ content }: { content: Dictionary["services"] }) {
  return (
    <Section className="bg-surface" id="services">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]"><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image alt={content.imageAlt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 40vw" src="/images/home/services-merida.webp" /></div></div>
        <p className="mt-8 max-w-2xl rounded-control bg-brand-light/50 px-5 py-4 font-semibold text-brand-primary-dark">{content.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{content.items.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
      </Container>
    </Section>
  );
}
