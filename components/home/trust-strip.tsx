import type { ReactNode } from "react";

import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";

const icons: ReactNode[] = [
  <path d="M12 20s-7-3.8-7-9.1A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.9C19 16.2 12 20 12 20Z" key="attention" />,
  <><path d="M4 19h16M6 19v-7l6-5 6 5v7" /><path d="M9 19v-4h6v4" /></>,
  <><path d="M4 6h10v8H9l-3 3v-3H4zM10 10h10v7h-2v3l-3-3h-5z" /><path d="M7 9h4M15 13h2" /></>,
  <><path d="M4 12h16M12 4c3.5 3.5 3.5 12.5 0 16M12 4c-3.5 3.5-3.5 12.5 0 16M5 8h14M5 16h14" /></>
];

export function TrustStrip({ content }: { content: Dictionary["trustValues"] }) {
  return (
    <section aria-label="Trust and value" className="border-b border-border/70 bg-brand-surface">
      <Container>
        <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {content.map((value, index) => (
            <article className="flex gap-4 px-1 py-6 sm:px-6 lg:py-8" key={value.title}>
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center text-brand-primary">
                <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">{icons[index]}</svg>
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold leading-tight text-brand-dark">{value.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
