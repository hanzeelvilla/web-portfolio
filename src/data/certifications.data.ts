import type { Certification } from "../types";
import { azureLogo, claudeLogo, dockerLogo } from "./techLogos.data";

export const certificationsData: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2026",
    logo: azureLogo,
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    logo: claudeLogo,
  },
  {
    name: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    date: "Nov 2025",
    logo: dockerLogo,
  },
];
