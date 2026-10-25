import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-primary text-primary-foreground shadow-soft hover:bg-brand-primary-dark active:bg-brand-primary-dark",
  secondary:
    "border border-primary bg-transparent text-brand-primary-dark hover:bg-secondary active:bg-secondary",
  quiet: "text-brand-primary-dark hover:bg-secondary active:bg-secondary"
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ease-out focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      type={type}
      {...props}
    />
  );
}
