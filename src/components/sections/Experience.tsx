import { ExperienceCard } from "../ui/ExperienceCard";
import { workExperienceData } from "../../data";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4"
    >
      <div className="mb-5 flex items-center justify-center gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
          Work Experience
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {workExperienceData.map((experience) => (
          <ExperienceCard
            key={experience.company}
            company={experience.company}
            position={experience.position}
            startDate={experience.startDate}
            endDate={experience.endDate}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};
