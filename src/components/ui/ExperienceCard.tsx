import { FaArrowRightLong } from "react-icons/fa6";
import type { WorkExperience } from "../../types/workExperience";

export const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  responsibilities,
}: WorkExperience) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="grid gap-0 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 p-6 md:border-b-0 md:border-r md:px-8 md:pb-8 md:pt-12">
          <p className="text-xs font-semibold uppercase text-slate-500">
            {startDate} - {endDate}
          </p>

          <div className="space-y-1">
            <p className="text-2xl font-semibold  text-slate-800">{company}</p>
            <p className="text-sm font-medium text-slate-500">{position}</p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8">
          <div className="flex flex-col gap-5 text-left">
            {responsibilities.map((responsibility) => (
              <div
                key={responsibility.id}
                className="flex gap-3 rounded-xl bg-slate-50 p-4"
              >
                <FaArrowRightLong className="mt-1 shrink-0 text-slate-500" />
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  {responsibility.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
