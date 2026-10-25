export const serviceCategories = [
  { value: "personal-assistance", en: "Personal Assistance", es: "Asistencia Personal" },
  { value: "childcare", en: "Childcare", es: "Cuidado Infantil" },
  { value: "house-cleaning", en: "House Cleaning", es: "Limpieza del Hogar" },
  { value: "transportation-tours", en: "Transportation & Tours", es: "Transporte y Tours" },
  { value: "meal-preparation", en: "Meal Preparation", es: "Preparación de Comidas" },
  { value: "activity-itineraries", en: "Personalized Activity Itineraries", es: "Itinerarios Personalizados de Actividades" },
  { value: "language-support", en: "Language Support & Real-Time Interpretation", es: "Apoyo Lingüístico e Interpretación en Tiempo Real" }
] as const;

export type ServiceCategory = (typeof serviceCategories)[number]["value"];
export function isServiceCategory(value: string): value is ServiceCategory {
  return serviceCategories.some((service) => service.value === value);
}
