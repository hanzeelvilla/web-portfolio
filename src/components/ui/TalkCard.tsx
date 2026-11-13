import type { ReactNode } from "react";
import {
  MdOpenInNew,
  MdOutlineCalendarMonth,
  MdOutlineLanguage,
  MdOutlineLocationOn,
  MdOutlinePeople,
  MdPlayCircleOutline,
} from "react-icons/md";
import type { Talk } from "../../types";
import { TechPill } from "./TechPill";

const linkClassName =
  "flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const MetaItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-center gap-1.5">{children}</li>
);

export const TalkCard = ({
  title,
  event,
  location,
  date,
  attendees,
  summary,
  banner,
  topics,
  language,
  format,
  postUrl,
  recordingUrl,
}: Talk) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)] md:flex-row">
      <div className="aspect-4/5 w-full shrink-0 overflow-hidden bg-slate-100 md:w-80">
        <img
          src={banner}
          alt={`Banner of the talk "${title}"`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-lg font-semibold text-slate-800">{title}</p>
          <p className="text-sm font-semibold text-slate-600">{event}</p>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          <MetaItem>
            <MdOutlineCalendarMonth className="h-4 w-4" aria-hidden />
            <time dateTime={date}>{dateFormatter.format(new Date(date))}</time>
          </MetaItem>
          <MetaItem>
            <MdOutlineLocationOn className="h-4 w-4" aria-hidden />
            {location}
          </MetaItem>
          {attendees !== undefined && (
            <MetaItem>
              <MdOutlinePeople className="h-4 w-4" aria-hidden />
              {attendees} attendees
            </MetaItem>
          )}
          <MetaItem>
            <MdOutlineLanguage className="h-4 w-4" aria-hidden />
            {language} · {format}
          </MetaItem>
        </ul>

        <p className="text-sm leading-5 text-slate-600 md:text-base">
          {summary}
        </p>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <TechPill key={topic.name} tech={topic} />
            ))}
          </div>

          {(postUrl || recordingUrl) && (
            <div className="grid w-full gap-3 sm:grid-cols-2">
              {postUrl && (
                <a
                  href={postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClassName} ${!recordingUrl ? "sm:col-span-2" : ""}`}
                >
                  <MdOpenInNew className="h-5 w-5" />
                  <span>View Post</span>
                </a>
              )}
              {recordingUrl && (
                <a
                  href={recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClassName} ${!postUrl ? "sm:col-span-2" : ""}`}
                >
                  <MdPlayCircleOutline className="h-5 w-5" />
                  <span>Watch Recording</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
