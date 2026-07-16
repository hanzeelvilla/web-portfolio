import type { Project } from "../types";
import esliConsole from "../assets/images/projects/esli-ultima-mision/esli-console.webp";
import esliGameBoss1 from "../assets/images/projects/esli-ultima-mision/esli-game-boss1.mp4";
import esliGameBoss2 from "../assets/images/projects/esli-ultima-mision/esli-game-boss2.mp4";

import hydroMastersDemo from "../assets/images/projects/hydromasters/hydromasters-demo.mp4";
import hydroMasters from "../assets/images/projects/hydromasters/hydromasters.webp";
import pcb from "../assets/images/projects/hydromasters/pcb.webp";

import {
  arduinoLogo,
  expressJsLogo,
  mongoDbLogo,
  nodeJsLogo,
  reactLogo,
} from "./techLogos.data";

export const projectsData: Project[] = [
  {
    title: "ESLI Última Misión",
    description:
      "A spaceship shooter built for a custom Raspberry Pi Pico console with 10 upgradeable weapons, unique boss fights and a progressive level system. The project includes a companion website and a backend API that dynamically validates and manages a live Top 10 leaderboard.",
    media: [
      {
        type: "video",
        src: esliGameBoss1,
      },
      {
        type: "video",
        src: esliGameBoss2,
      },
      { type: "image", src: esliConsole },
    ],
    technologies: [
      arduinoLogo,
      nodeJsLogo,
      reactLogo,
      expressJsLogo,
      mongoDbLogo,
    ],
    url: "https://esli-game-page.vercel.app/",
    repository: "https://github.com/angelverduzco/esli-game-api",
  },
  {
    title: "HydroMasters",
    description:
      "An ESP32-powered hydroponic irrigation system that monitors water temperature and TDS levels in real time via an LCD display. It features automated pump controls and a web dashboard for live data tracking, history logging, and remote actuator management.",
    media: [
      {
        type: "video",
        src: hydroMastersDemo,
      },
      { type: "image", src: hydroMasters },
      { type: "image", src: pcb },
    ],
    technologies: [
      arduinoLogo,
      nodeJsLogo,
      reactLogo,
      expressJsLogo,
      mongoDbLogo,
    ],
    repository: "https://github.com/hanzeelvilla/HydroMasters",
  },
];
