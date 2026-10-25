import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "quiet";
};

const variants = {
  primary: "border border-transparent bg-primary text-primary-foreground shadow-soft hover:bg-brand-primary-dark active:bg-brand-primary-dark",
  secondary: "border border-primary bg-transparent text-brand-primary-dark hover:bg-secondary active:bg-secondary",
  quiet: "text-brand-primary-dark hover:bg-secondary active:bg-secondary"
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-center text-sm font-semibold tracking-wide transition-colors duration-200 ease-out focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
