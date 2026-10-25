import type { Locale } from "@/lib/i18n/config";

export const REVIEW_CONSENT_VERSION = "2026-10-24";

export interface PublicReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string | null;
  language: Locale;
  created_at: string;
}

function config() {
  return { url: process.env.NEXT_PUBLIC_SUPABASE_URL, key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY };
}

export async function getApprovedReviews(): Promise<PublicReview[]> {
  const { url, key } = config();
  if (!url || !key) return [];
  try {
    const response = await fetch(`${url}/rest/v1/reviews?select=id,name,rating,comment,service,language,created_at&status=eq.approved&order=created_at.desc`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      next: { revalidate: 60 }
    });
    if (!response.ok) return [];
    const reviews = (await response.json()) as PublicReview[];
    return reviews.filter((review) => review.language === "en" || review.language === "es");
  } catch {
    return [];
  }
}
