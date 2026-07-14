import { certificationsData, educationData } from "../../data";
import { CertificationCard } from "../ui/CertificationCard";
import { EducationCard } from "../ui/EducationCard";

export const Education = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-800 md:text-left">
            Education
          </h2>
          <div className="flex flex-col">
            {educationData.map((education, index) => (
              <EducationCard
                key={education.institution}
                {...education}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-800 md:text-left">
            Certifications
          </h2>
          <div className="flex flex-col gap-4">
            {certificationsData.map((certification) => (
              <CertificationCard key={certification.name} {...certification} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
