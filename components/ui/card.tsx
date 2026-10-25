import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-card border border-border/70 bg-surface p-6 shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-secondary hover:shadow-card-hover sm:p-8 ${className}`}
      {...props}
    />
  );
}
