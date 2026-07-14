import type { CSSProperties } from "react";
import type { TechLogo } from "../../types/techLogo";

type TechPillProps = {
  tech: TechLogo;
};

export const TechPill = ({ tech }: TechPillProps) => {
  return (
    <div
      style={{ "--tech-hover-color": tech.hoverColor } as CSSProperties}
      className="flex w-full md:w-36 items-center justify-center gap-3 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 group hover:bg-slate-100 hover:text-(--tech-hover-color)"
    >
      <tech.Icon
        className="h-6 w-6 transition-colors duration-300 group-hover:text-(--tech-hover-color)"
        aria-label={tech.name}
      />
      <p>{tech.name}</p>
    </div>
  );
};
