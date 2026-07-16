import type { TechLogo } from "./techLogo";

export interface ProjectImage {
  type: "image";
  src: string;
}

export interface ProjectVideo {
  type: "video";
  src: string;
}

export type ProjectMedia = ProjectImage | ProjectVideo;

export interface Project {
  title: string;
  description: string;
  media: ProjectMedia[];
  technologies: TechLogo[];
  url?: string;
  repository: string;
}
