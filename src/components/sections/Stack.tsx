import { techStackData } from "../../data";
import { TechPill } from "../ui/TechPill";

export const Stack = () => {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4">
      <div className="mb-8 flex items-center justify-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-800">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
          <div className="flex flex-col items-center md:items-start gap-4 p-6 md:px-8 md:pb-8 md:pt-12">
            <p className="text-lg font-semibold text-slate-800">Languages</p>
            <div className="flex flex-wrap gap-3">
              {techStackData.languages.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </article>
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:px-8 md:pb-8 md:pt-12">
            <div className="flex flex-1 min-w-0 flex-col items-center md:items-start gap-4">
              <p className="text-lg font-semibold text-slate-800">Frontend</p>
              <div className="flex flex-wrap gap-3">
                {techStackData.frontend.map((tech) => (
                  <TechPill key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
            <div className="flex flex-1 min-w-0 flex-col items-center md:items-start gap-4">
              <p className="text-lg font-semibold text-slate-800">Backend</p>
              <div className="flex flex-wrap gap-3">
                {techStackData.backend.map((tech) => (
                  <TechPill key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className="col-span-1 flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)] md:col-span-2">
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 p-6 md:px-8 md:pb-8 md:pt-12">
            <p className="text-lg font-semibold text-slate-800">
              Cloud & DevOps
            </p>
            <div className="flex flex-wrap gap-3">
              {techStackData.devops.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
