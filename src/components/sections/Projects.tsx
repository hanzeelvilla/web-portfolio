import { projectsData } from "../../data";
import { TechPill } from "../ui/TechPill";
import { VscDebugStart } from "react-icons/vsc";
import { ImGithub } from "react-icons/im";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4"
    >
      <div className="mb-8 flex items-center justify-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-800">
          Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {projectsData.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
          >
            <Carousel className="group w-full">
              <CarouselContent>
                {project.media.map((media) => (
                  <CarouselItem key={media.src}>
                    <div className="aspect-video w-full overflow-hidden bg-slate-100">
                      {media.type === "video" ? (
                        <video
                          src={media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                          title={`${project.title} demo`}
                        />
                      ) : (
                        <img
                          src={media.src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.media.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 ${}" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>

            <div className="flex h-full flex-col items-start gap-3 px-6 p-6">
              <p className="text-lg font-semibold text-slate-800">
                {project.title}
              </p>
              <p className="text-sm leading-5 text-slate-600 md:text-base">
                {project.description}
              </p>
              <div className="mt-auto flex w-full flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <TechPill key={tech.name} tech={tech} />
                  ))}
                </div>
                <div className="grid w-full gap-3 sm:grid-cols-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg"
                    >
                      <VscDebugStart className="h-5 w-5" />
                      <span>View Project</span>
                    </a>
                  )}
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg ${!project.url ? "sm:col-span-2" : ""}`}
                  >
                    <ImGithub className="h-5 w-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
