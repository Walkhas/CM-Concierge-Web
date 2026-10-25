import { notFound } from "next/navigation";

import BookConsultationPage from "../book-consultation/page";

export default async function SpanishConsultationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "es") notFound();
  return BookConsultationPage({ params });
}
