import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PublicReview } from "@/lib/reviews";
import { ButtonLink } from "@/components/ui/button-link";

export function TestimonialsSection({ content, reviews }: { content: Dictionary["testimonials"]; reviews: PublicReview[] }) {
  return <Section className="bg-brand-surface"><Container><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><div className="mt-10 grid gap-5 md:grid-cols-2">{reviews.length ? reviews.map((review) => <article key={review.id} className="rounded-card border border-border bg-surface p-6"><p className="text-accent" aria-label={`${review.rating} ${content.reviews.rating}`}>{"★".repeat(review.rating)}</p><p className="mt-3 text-brand-dark">“{review.comment}”</p><p className="mt-4 text-sm font-semibold">{review.name}</p></article>) : <p className="border-l-2 border-dashed border-brand-secondary py-5 pl-6 text-brand-muted">{content.empty}</p>}</div><ButtonLink className="mt-8" href={content.leaveReview.href} variant="secondary">{content.leaveReview.label}</ButtonLink></Container></Section>;
}
