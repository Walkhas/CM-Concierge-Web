import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import logo from "@/assets/C&M-Logo-clear.png";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    icons: {
      icon: logo.src,
      apple: logo.src
    }
  };
}

export default async function LocalizedLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  return (
    <html lang={locale}>
      <body className={`${dmSerifDisplay.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
