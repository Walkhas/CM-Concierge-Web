import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

export const en: Dictionary = {
  metadata: {
    title: "C&M Concierge | Personalized Assistance in Mérida",
    description: "Personalized concierge support, local coordination, and everyday assistance in Mérida, Yucatán. Start with a free consultation."
  },
  header: {
    nav: { about: "What We Do", services: "Services", process: "How It Works", contact: "Contact" },
    consultation: { label: "Free Consultation", href: site.consultationHref },
    languageLabel: "Choose language",
    menuLabel: "Menu",
    navigationLabel: "Main navigation",
    homeLabel: "C&M Concierge home"
  },
  hero: {
    eyebrow: "Personal assistance in Mérida",
    title: "More time for what matters to you.",
    description: "C&M Concierge helps you coordinate everyday needs, local services, and meaningful plans with thoughtful, personalized support.",
    primary: { label: "Start a Free Consultation", href: site.consultationHref },
    secondary: { label: "Explore Our Services", href: "#services" },
    imageAlt: "Aerial view of Mérida's historic center at dusk"
  },
  about: {
    eyebrow: "A helping hand, thoughtfully organized",
    title: "You do not need to have everything figured out.",
    description: "Tell us what you need, and we can talk through the best way to help. Our concierge approach brings local knowledge, calm coordination, and personal attention to everyday situations.",
    imageAlt: "Visitors enjoying a colorful cultural evening in Mérida",
    points: ["Save time and reduce stress", "Coordinate practical everyday needs", "Receive support shaped around your situation"]
  },
  services: {
    eyebrow: "Ways we can help",
    title: "Flexible support for everyday life and special plans.",
    description: "Our services are personalized categories of assistance. Availability, scope, and specific requirements can be discussed during your consultation.",
    intro: "Not sure where your need fits? That is exactly what the consultation is for.",
    imageAlt: "A lively Mérida market with local vendors",
    items: [
      { title: "Personal Assistance", description: "Errands, grocery shopping, appointments, installations, and practical coordination." },
      { title: "Childcare", description: "Flexible short-term, long-term, or last-minute arrangements based on needs and availability." },
      { title: "House Cleaning", description: "Routine or deep cleaning, plus preparation and cleanup around events." },
      { title: "Transportation & Tours", description: "Reliable transportation coordination and personalized tours, subject to availability." },
      { title: "Meal Preparation", description: "Menu planning, grocery support, and one-time or weekly meal preparation." },
      { title: "Personalized Activity Itineraries", description: "Organized activity planning shaped around your interests, time, and budget." },
      { title: "Language Support & Real-Time Interpretation", description: "Everyday communication assistance during appointments, errands, and activities. Scope is discussed during consultation." }
    ]
  },
  howItWorks: {
    eyebrow: "A simple first step",
    title: "Start with a conversation.",
    description: "The free consultation gives us space to understand your situation before identifying the right kind of support.",
    steps: [
      { title: "Begin with a free consultation", description: "Share what is on your mind without needing a perfect plan." },
      { title: "Tell us what you need", description: "We listen to the details, priorities, and practical considerations." },
      { title: "Identify the right solution", description: "Together, we clarify how C&M Concierge may be able to assist." },
      { title: "Enjoy more time and less stress", description: "Move forward with a plan shaped around your needs." }
    ]
  },
  testimonials: {
    eyebrow: "Trust takes time",
    title: "A thoughtful experience starts here.",
    description: "We are building a place for approved client experiences to be shared. In the meantime, learn more about how we can help during a free consultation.",
    empty: "Approved client reviews will appear here as they become available."
  },
  finalCta: {
    eyebrow: "Let us talk",
    title: "Not sure what kind of help you need? Start there.",
    description: "Your free consultation is a relaxed first conversation about your needs, your plans, and how C&M Concierge may be able to help.",
    button: { label: "Talk With C&M Concierge", href: site.consultationHref }
  },
  footer: {
    description: "Personalized assistance and local coordination in Mérida, Yucatán.",
    contactLabel: "Contact",
    socialLabel: "Connect",
    locationLabel: "Based in",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    facebookLabel: "Facebook",
    location: site.contact.location,
    copyright: "© C&M Concierge. Personalized support, thoughtfully organized."
  }
};
