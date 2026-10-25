export interface ButtonCopy {
  label: string;
  href: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ServiceCopy {
  title: string;
  description: string;
}

export interface BookingCopy {
  eyebrow: string;
  title: string;
  description: string;
  loading: string;
  error: string;
  fallback: string;
  fallbackLabel: string;
  intro: string;
  whatToExpectTitle: string;
  whatToExpect: string[];
  afterBookingTitle: string;
  afterBooking: string;
}

export interface Dictionary {
  metadata: { title: string; description: string };
  header: {
    nav: { about: string; services: string; process: string; contact: string };
    consultation: ButtonCopy;
    languageLabel: string;
    menuLabel: string;
    navigationLabel: string;
    homeLabel: string;
  };
  hero: { eyebrow: string; title: string; description: string; primary: ButtonCopy; secondary: ButtonCopy; imageAlt: string };
  trustValues: { title: string; description: string }[];
  about: SectionCopy & { imageAlt: string; points: string[]; consultation: ButtonCopy };
  services: SectionCopy & { intro: string; items: ServiceCopy[]; imageAlt: string };
  howItWorks: SectionCopy & { steps: { title: string; description: string }[] };
  testimonials: SectionCopy & { empty: string; leaveReview: ButtonCopy; reviews: { name: string; service: string; rating: string } };
  reviews: { eyebrow: string; title: string; description: string; nameLabel: string; ratingLabel: string; ratingPlaceholder: string; serviceLabel: string; servicePlaceholder: string; commentLabel: string; consentLabel: string; consentVersion: string; submit: string; loading: string; success: string; error: string };
  booking: BookingCopy;
  finalCta: SectionCopy & { button: ButtonCopy };
  footer: { description: string; contactLabel: string; socialLabel: string; locationLabel: string; emailLabel: string; phoneLabel: string; facebookLabel: string; location: string; copyright: string };
}
