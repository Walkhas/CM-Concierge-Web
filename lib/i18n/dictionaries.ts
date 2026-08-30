import { en } from "@/content/dictionaries/en";
import { es } from "@/content/dictionaries/es";
import type { Dictionary } from "@/content/types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
