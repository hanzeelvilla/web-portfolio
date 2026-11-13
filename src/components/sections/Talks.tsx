import { talksData } from "../../data";
import { TalkCard } from "../ui/TalkCard";

// Newest first, regardless of the order in talks.data.ts.
const sortedTalks = [...talksData].sort((a, b) => b.date.localeCompare(a.date));

export const Talks = () => {
  return (
    <section id="talks" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4">
      <div className="mb-8 flex items-center justify-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-800">
          Talks
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {sortedTalks.map((talk) => (
          <TalkCard key={`${talk.date}-${talk.title}`} {...talk} />
        ))}
      </div>
    </section>
  );
};
