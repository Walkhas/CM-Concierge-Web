import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const swatches = [
  ["Primary", "bg-primary", "Deep blue-teal"],
  ["Primary dark", "bg-brand-primary-dark", "Charcoal teal"],
  ["Accent", "bg-accent", "Muted blue-gray"],
  ["Light", "bg-brand-light", "Warm cream gray"],
  ["Dark", "bg-brand-dark", "Logo charcoal"]
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section className="bg-brand-primary-dark text-primary-foreground">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex justify-center lg:justify-start">
              <Image
                alt="C&M Concierge Services logo"
                className="h-auto w-64 rounded-card"
                height={1600}
                priority
                src="/brand/logo.jpeg"
                width={1600}
              />
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-light">
                Design system specimen
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
                A calm, capable visual language for thoughtful assistance.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-light sm:text-xl">
                Una base visual clara y acogedora para una experiencia de
                concierge bilingüe, personal y fácil de entender.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            description="The palette balances the official charcoal and cream logo with the blue-teal atmosphere of the approved cover image."
            eyebrow="Color language"
            title="Warm surfaces, confident contrast"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {swatches.map(([name, color, description]) => (
              <Card className="p-4" key={name}>
                <div className={`h-20 rounded-control ${color}`} />
                <p className="mt-4 font-semibold text-brand-dark">{name}</p>
                <p className="mt-1 text-sm text-brand-muted">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              description="Components stay deliberately small and content-agnostic so future English and Spanish pages can grow without fighting the layout."
              eyebrow="Type and components"
              title="Clear by design, flexible by default"
            />
            <Card className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-brand-primary">Display heading</p>
                <p className="mt-2 font-display text-3xl font-semibold leading-tight text-brand-dark">
                  Personal attention, thoughtfully organized.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-primary">Spanish expansion</p>
                <p className="mt-2 text-lg leading-relaxed text-brand-muted">
                  Atención personalizada, organizada con cuidado y pensada para
                  acompañar cada necesidad con claridad.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary action</Button>
                <Button variant="quiet">Quiet action</Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="overflow-hidden rounded-card bg-brand-primary-dark shadow-soft">
            <Image
              alt="Approved C&M Concierge Facebook cover reference"
              className="h-auto w-full opacity-90"
              height={740}
              src="/brand/facebook-cover.jpg"
              width={2000}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
