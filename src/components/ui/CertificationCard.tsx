import type { CSSProperties } from "react";
import type { Certification } from "../../types";

export const CertificationCard = ({
  name,
  issuer,
  date,
  logo,
}: Certification) => {
  return (
    <div
      style={{ "--tech-hover-color": logo.hoverColor } as CSSProperties}
      className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-(--tech-hover-color)"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-600 transition-colors duration-300 group-hover:border-(--tech-hover-color) group-hover:text-(--tech-hover-color)">
          <logo.Icon className="h-5 w-5" aria-label={logo.name} />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-800">{name}</p>
          <p className="text-sm text-slate-500">{issuer}</p>
        </div>
      </div>
      <p className="shrink-0 text-sm uppercase text-slate-600">{date}</p>
    </div>
  );
};
