import type { TechLogo } from "./techLogo";

export type TalkLanguage = "English" | "Spanish";

export type TalkFormat = "In person" | "Online" | "Hybrid";

export type TalkEvent = "JSConf MX" | "Web Dev Talks" | "Playas On Tech";

export interface Talk {
  title: string;
  event: TalkEvent;
  location: string;
  date: string;
  attendees?: number;
  summary: string;
  banner: string;
  topics: TechLogo[];
  language: TalkLanguage;
  format: TalkFormat;
  postUrl?: string;
  recordingUrl?: string;
}
