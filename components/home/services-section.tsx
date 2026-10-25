import Image from "next/image";

import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "./service-card";
import { serviceIconNames } from "./service-icon";

export function ServicesSection({ content }: { content: Dictionary["services"] }) {
  return (
    <Section className="bg-surface" id="services">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.58fr] lg:gap-16"><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><div className="relative aspect-[16/10] overflow-hidden rounded-card"><Image alt={content.imageAlt} className="object-cover object-[center_55%]" fill sizes="(max-width: 1024px) 100vw, 42vw" src="/images/home/services-merida.webp" /></div></div>
        <p className="mt-10 max-w-2xl border-l-2 border-accent-sand pl-5 font-semibold text-brand-primary-dark">{content.intro}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((service, index) => <ServiceCard featured={index === 0} icon={serviceIconNames[index]} key={service.title} service={service} />)}
        </div>
      </Container>
    </Section>
  );
}
