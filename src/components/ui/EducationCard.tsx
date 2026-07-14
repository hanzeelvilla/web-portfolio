import type { Education } from "../../types";

type EducationCardProps = Education & {
  isLast?: boolean;
};

export const EducationCard = ({
  degree,
  institution,
  startDate,
  endDate,
  isLast = false,
}: EducationCardProps) => {
  return (
    <div
      className={`relative border-l-2 border-slate-200 pl-6 ${
        isLast ? "pb-0" : "pb-8"
      }`}
    >
      <span className="absolute -left-1.75 top-1 h-3 w-3 rounded-full border-2 border-slate-800 bg-white" />
      <p className="text-lg font-semibold text-slate-800">{degree}</p>
      <p className="text-sm font-semibold text-slate-600">{institution}</p>
      <p className="mt-1 text-sm uppercase text-slate-500">
        {startDate} - {endDate}
      </p>
    </div>
  );
};
