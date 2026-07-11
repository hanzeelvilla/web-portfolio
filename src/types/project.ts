import type { TechLogo } from "./techLogo";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: TechLogo[];
  url?: string;
  repository: string;
}
