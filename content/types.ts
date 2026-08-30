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
  about: SectionCopy & { imageAlt: string; points: string[] };
  services: SectionCopy & { intro: string; items: ServiceCopy[]; imageAlt: string };
  howItWorks: SectionCopy & { steps: { title: string; description: string }[] };
  testimonials: SectionCopy & { empty: string };
  finalCta: { eyebrow: string; title: string; description: string; button: ButtonCopy };
  footer: { description: string; contactLabel: string; socialLabel: string; locationLabel: string; emailLabel: string; phoneLabel: string; facebookLabel: string; location: string; copyright: string };
}
