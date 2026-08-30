import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorksSection({ content }: { content: Dictionary["howItWorks"] }) {
  return <Section id="process"><Container><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.steps.map((step, index) => <article className="border-t-2 border-primary pt-5" key={step.title}><p className="font-display text-4xl font-semibold text-brand-secondary">0{index + 1}</p><h3 className="mt-4 font-display text-xl font-semibold text-brand-dark">{step.title}</h3><p className="mt-3 text-brand-muted">{step.description}</p></article>)}</div></Container></Section>;
}
