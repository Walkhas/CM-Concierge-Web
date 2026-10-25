import type { ReactNode } from "react";

export type ServiceIconName =
  | "assistance"
  | "childcare"
  | "cleaning"
  | "transportation"
  | "meal"
  | "itinerary"
  | "language";

const iconPaths: Record<ServiceIconName, ReactNode> = {
  assistance: <><circle cx="12" cy="8" r="3" /><path d="M5 20c.5-3.1 2.8-5 7-5s6.5 1.9 7 5" /></>,
  childcare: <><circle cx="12" cy="7" r="2.5" /><path d="M7 20c.4-3.7 2.1-6 5-6s4.6 2.3 5 6M4 11h3M17 11h3" /></>,
  cleaning: <><path d="m8 4 8 8M14 3l3 3M6 14l4 4M4 20l4-4M15 13l-2 2" /></>,
  transportation: <><path d="M5 16V9l2-3h10l2 3v7M5 12h14M8 18h.01M16 18h.01" /><path d="M7 16h10" /></>,
  meal: <><path d="M5 4v7M8 4v7M5 8h3M6.5 11v9M16 4v16M16 4c3 2 3 6 0 8" /></>,
  itinerary: <><path d="M5 5h14v14H5zM8 3v4M16 3v4M5 9h14" /><path d="m9 14 2 2 4-4" /></>,
  language: <><path d="M4 6h10v8H9l-3 3v-3H4zM10 10h10v7h-2v3l-3-3h-5z" /><path d="M7 9h4M15 13h2" /></>
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
        {iconPaths[name]}
      </svg>
    </span>
  );
}

export const serviceIconNames: ServiceIconName[] = [
  "assistance",
  "childcare",
  "cleaning",
  "transportation",
  "meal",
  "itinerary",
  "language"
];
