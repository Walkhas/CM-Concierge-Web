import { NextResponse, type NextRequest } from "next/server";

import { locales, type Locale } from "@/lib/i18n/config";

function selectLocale(header: string | null): Locale {
  const preferences = (header ?? "")
    .split(",")
    .map((part, index) => {
      const [range, ...parameters] = part.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q=")
      );
      const quality = qualityParameter
        ? Number(qualityParameter.trim().slice(2))
        : 1;

      return {
        range: range.trim(),
        quality: Number.isFinite(quality) && quality >= 0 && quality <= 1 ? quality : 0,
        index
      };
    })
    .filter(({ range, quality }) => range && quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const preference of preferences) {
    const locale = locales.find(
      (supportedLocale) =>
        preference.range === supportedLocale ||
        preference.range.startsWith(`${supportedLocale}-`)
    );

    if (locale) return locale;
  }

  return "en";
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const locale = selectLocale(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"]
};
