import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import { consultationPathByLocale, reviewPathByLocale } from "@/lib/i18n/routes";

export const es: Dictionary = {
  metadata: {
    title: "C&M Concierge | Asistencia personalizada en Mérida",
    description: "Asistencia personalizada, coordinación local y apoyo para la vida diaria en Mérida, Yucatán. Comienza con una consulta gratuita."
  },
  header: {
    nav: { about: "Lo que hacemos", services: "Servicios", process: "Cómo funciona", contact: "Contacto" },
    consultation: { label: "Consulta gratuita", href: consultationPathByLocale.es },
    languageLabel: "Elegir idioma",
    menuLabel: "Menú",
    navigationLabel: "Navegación principal",
    homeLabel: "Inicio de C&M Concierge"
  },
  hero: {
    eyebrow: "Asistencia personalizada en Mérida",
    title: "Más tiempo para lo que realmente importa.",
    description: "C&M Concierge te ayuda a coordinar necesidades diarias, servicios locales y planes especiales con apoyo personalizado y atento.",
    primary: { label: "Comenzar una consulta gratuita", href: consultationPathByLocale.es },
    secondary: { label: "Explorar nuestros servicios", href: "#services" },
    imageAlt: "Vista aérea del centro histórico de Mérida al atardecer"
  },
  trustValues: [
    { title: "Atención personalizada", description: "Apoyo adaptado a tu situación." },
    { title: "Experiencia local", description: "Conocimiento práctico de Mérida y su ritmo." },
    { title: "Servicio bilingüe", description: "Apoyo claro en inglés o español." },
    { title: "Soluciones a tu medida", description: "Un punto de partida pensado para tus necesidades." }
  ],
  about: {
    eyebrow: "Una ayuda organizada con atención",
    title: "No necesitas tener todo resuelto.",
    description: "Cuéntanos qué necesitas y podemos conversar sobre la mejor manera de ayudarte. Nuestro enfoque de concierge combina conocimiento local, coordinación tranquila y atención personal.",
    imageAlt: "Visitantes disfrutando una noche cultural llena de color en Mérida",
    points: ["Ahorra tiempo y reduce el estrés", "Coordina necesidades prácticas del día a día", "Recibe apoyo adaptado a tu situación"],
    consultation: { label: "Comenzar una consulta gratuita", href: consultationPathByLocale.es }
  },
  services: {
    eyebrow: "En qué podemos ayudarte",
    title: "Apoyo flexible para la vida diaria y tus planes especiales.",
    description: "Nuestros servicios son categorías de asistencia personalizada. La disponibilidad, el alcance y los requisitos se pueden conversar durante tu consulta.",
    intro: "¿No sabes en qué categoría encaja tu necesidad? Para eso existe la consulta.",
    imageAlt: "Un mercado animado de Mérida con vendedores locales",
    items: [
      { title: "Asistencia Personal", description: "Mandados, compras, citas, instalaciones y coordinación práctica." },
      { title: "Cuidado Infantil", description: "Opciones flexibles de cuidado a corto o largo plazo, incluso de último momento, según la necesidad y disponibilidad." },
      { title: "Limpieza del Hogar", description: "Limpieza regular o profunda, además de preparación y limpieza después de eventos." },
      { title: "Transporte y Tours", description: "Coordinación de transporte confiable y tours personalizados, sujetos a disponibilidad." },
      { title: "Preparación de Comidas", description: "Planificación de menús, apoyo con compras y preparación semanal o por ocasión." },
      { title: "Itinerarios Personalizados de Actividades", description: "Planificación organizada de actividades según tus intereses, tiempo y presupuesto." },
      { title: "Apoyo Lingüístico e Interpretación en Tiempo Real", description: "Asistencia para comunicarte durante citas, mandados y actividades. El alcance se conversa durante la consulta." }
    ]
  },
  howItWorks: {
    eyebrow: "Un primer paso sencillo",
    title: "Comienza con una conversación.",
    description: "La consulta gratuita nos permite entender tu situación antes de identificar el tipo de apoyo adecuado.",
    steps: [
      { title: "Comienza con una consulta gratuita", description: "Comparte lo que necesitas sin tener que llegar con un plan perfecto." },
      { title: "Cuéntanos qué necesitas", description: "Escuchamos los detalles, prioridades y aspectos prácticos." },
      { title: "Identificamos la solución adecuada", description: "Juntos aclaramos cómo C&M Concierge puede ayudarte." },
      { title: "Disfruta más tiempo y menos estrés", description: "Avanza con un plan adaptado a tus necesidades." }
    ]
  },
  testimonials: {
    eyebrow: "La confianza toma tiempo",
    title: "Una experiencia atenta comienza aquí.",
    description: "Estamos preparando un espacio para compartir experiencias aprobadas de nuestros clientes. Mientras tanto, conoce cómo podemos ayudarte en una consulta gratuita.",
    empty: "Las reseñas aprobadas de clientes aparecerán aquí cuando estén disponibles.", leaveReview: { label: "Dejar una reseña", href: reviewPathByLocale.es }, reviews: { name: "", service: "", rating: "" }
  },
  reviews: { eyebrow: "Comparte tu experiencia", title: "Dejar una reseña", description: "Revisaremos tu reseña antes de publicarla.", nameLabel: "Nombre", ratingLabel: "Calificación", ratingPlaceholder: "Elige una calificación", serviceLabel: "Categoría de servicio (opcional)", servicePlaceholder: "Selecciona una categoría", commentLabel: "Tu reseña", consentLabel: "Acepto que esta reseña se muestre públicamente si es aprobada.", consentVersion: "Versión de consentimiento 2026-10-24", submit: "Enviar reseña", loading: "Enviando…", success: "Gracias. Tu reseña está pendiente de aprobación.", error: "No pudimos enviar tu reseña. Revisa los datos e inténtalo de nuevo." },
  booking: {
    eyebrow: "Conversemos",
    title: "¿No sabes exactamente qué tipo de ayuda necesitas? Comencemos por ahí.",
    description: "Tu consulta gratuita es una primera conversación tranquila sobre tus necesidades, tus planes y cómo C&M Concierge puede ayudarte.",
    loading: "Cargando el calendario de consultas…",
    error: "No pudimos cargar el calendario de consultas en este momento.",
    fallback: "También puedes elegir un horario directamente en Cal.com:",
     fallbackLabel: "Abrir la reserva de consulta en Cal.com",
     intro: "Elige un horario conveniente para una primera conversación gratuita. No necesitas saber exactamente qué servicio necesitas antes de reservar.",
    whatToExpectTitle: "Qué puedes esperar",
    whatToExpect: ["Una conversación tranquila sobre tus necesidades y planes.", "Espacio para hacer preguntas y compartir detalles prácticos.", "Más claridad sobre cómo C&M Concierge puede ayudarte."],
    afterBookingTitle: "Después de reservar",
    afterBooking: "Recibirás una confirmación con los detalles de la reunión. Si tus planes cambian, Cal.com también te permitirá reprogramar o cancelar."
  },
  finalCta: { eyebrow: "Cuando estés listo", title: "Da el primer paso con una consulta gratuita.", description: "Trae tus preguntas, tus planes o simplemente la situación que quieres conversar.", button: { label: "Reservar una consulta gratuita", href: consultationPathByLocale.es } },
  footer: {
    description: "Asistencia personalizada y coordinación local en Mérida, Yucatán.",
    contactLabel: "Contacto",
    socialLabel: "Conecta",
    locationLabel: "Estamos en",
    emailLabel: "Correo",
    phoneLabel: "Teléfono / WhatsApp",
    facebookLabel: "Facebook",
    location: site.contact.location,
    copyright: "© C&M Concierge. Apoyo personalizado y organizado con atención."
  }
};
