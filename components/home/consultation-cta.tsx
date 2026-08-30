import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ConsultationCta({ content }: { content: Dictionary["finalCta"] }) {
  return <Section className="bg-brand-primary-dark text-white"><Container><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{content.eyebrow}</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-light">{content.description}</p><ButtonLink className="mt-8" href={content.button.href}>{content.button.label}</ButtonLink></div></Container></Section>;
}
