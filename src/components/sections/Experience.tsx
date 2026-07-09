import { FaArrowRightLong } from "react-icons/fa6";

export const Experience = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-5 flex items-center justify-center gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
          Work Experience
        </h2>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 md:grid-cols-[260px_1fr]">
          <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 p-6 md:border-b-0 md:border-r md:px-8 md:pb-8 md:pt-12">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Oct 2025 - Jun 2026
            </p>

            <div className="space-y-1">
              <p className="text-2xl font-semibold  text-slate-800">
                OpenChambas
              </p>
              <p className="text-sm font-medium text-slate-500">
                Intern Software Engineer
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8">
            <div className="flex flex-col gap-5 text-left">
              <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <FaArrowRightLong className="mt-1 shrink-0 text-slate-500" />
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Refined and scaled an initial MVP, optimizing core
                  functionalities to align with evolving project requirements
                  and enhancing the overall system architecture.
                </p>
              </div>
              <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <FaArrowRightLong className="mt-1 shrink-0 text-slate-500" />
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Boosted platform stability by identifying and resolving 10+
                  logic and UI bugs weekly, ensuring a consistent and error-free
                  experience during the pre-production phase.
                </p>
              </div>
              <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <FaArrowRightLong className="mt-1 shrink-0 text-slate-500" />
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Led the Internationalization (i18n) strategy, implementing
                  full bilingual support (English and Spanish) to broaden the
                  platform's accessibility for a global talent market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
