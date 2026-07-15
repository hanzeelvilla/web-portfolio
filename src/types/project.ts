import type { TechLogo } from "./techLogo";

export interface ProjectImage {
  type: "image";
  src: string;
  width: number;
  height: number;
}

export interface ProjectVideo {
  type: "video";
  src: string;
  poster: string;
  width: number;
  height: number;
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
