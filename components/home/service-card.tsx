import type { ServiceCopy } from "@/content/types";
import { Card } from "@/components/ui/card";
import { ServiceIcon, type ServiceIconName } from "./service-icon";

export function ServiceCard({ service, icon, featured = false }: { service: ServiceCopy; icon: ServiceIconName; featured?: boolean }) {
  return (
    <Card className={`group flex h-full flex-col ${featured ? "lg:col-span-2 lg:flex-row lg:items-start lg:gap-8" : ""}`}>
      <ServiceIcon name={icon} />
      <div className={featured ? "mt-6 lg:mt-0" : "mt-6"}>
        <h3 className="font-display text-xl font-semibold leading-tight text-brand-dark sm:text-2xl">{service.title}</h3>
        <p className="mt-3 max-w-prose text-brand-muted">{service.description}</p>
      </div>
    </Card>
  );
}
