import type { ServiceCopy } from "@/content/types";
import { Card } from "@/components/ui/card";

export function ServiceCard({ service }: { service: ServiceCopy }) {
  return <Card className="h-full"><h3 className="font-display text-xl font-semibold text-brand-dark">{service.title}</h3><p className="mt-3 text-brand-muted">{service.description}</p></Card>;
}
