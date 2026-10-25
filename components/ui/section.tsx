import type { HTMLAttributes } from "react";

export function Section({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`py-section sm:py-section-lg ${className}`} {...props} />;
}
