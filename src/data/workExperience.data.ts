import type { WorkExperience } from "../types/workExperience";

export const workExperienceData: WorkExperience[] = [
  {
    company: "OpenChambas",
    position: "Software Engineer Intern",
    startDate: "Oct 2025",
    endDate: "Jun 2026",
    responsibilities: [
      {
        id: "openchambas-bullet-1",
        text: "Refined and scaled an initial MVP, optimizing core functionalities to align with evolving project requirements and enhancing the overall system architecture.",
      },
      {
        id: "openchambas-bullet-2",
        text: "Boosted platform stability by identifying and resolving 10+ logic and UI bugs weekly, ensuring a consistent and error-free experience during the pre-production phase.",
      },
      {
        id: "openchambas-bullet-3",
        text: "Led the Internationalization (i18n) strategy, implementing full bilingual support (English and Spanish) to broaden the platform's accessibility for a global talent market.",
      },
    ],
  },
];
