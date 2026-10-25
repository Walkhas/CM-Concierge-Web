import type { Locale } from "./config";

export const consultationPathByLocale: Record<Locale, string> = {
  en: "/en/book-consultation",
  es: "/es/reservar-consulta"
};

export const reviewPathByLocale: Record<Locale, string> = {
  en: "/en/leave-review",
  es: "/es/dejar-resena"
};
