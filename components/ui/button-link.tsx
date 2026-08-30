import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "quiet";
};

const variants = {
  primary: "bg-primary text-primary-foreground shadow-soft hover:bg-brand-primary-dark",
  secondary: "border border-primary bg-transparent text-brand-primary-dark hover:bg-secondary",
  quiet: "text-brand-primary-dark hover:bg-secondary"
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-center text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
