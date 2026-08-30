import type { Dictionary } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection({ content }: { content: Dictionary["testimonials"] }) {
  return <Section className="bg-brand-light/40"><Container><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><Card className="mt-8 max-w-2xl border-dashed bg-transparent shadow-none"><p className="text-brand-muted">{content.empty}</p></Card></Container></Section>;
}
