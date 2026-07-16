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
      "Homemade spaceship videogame console built from scratch using Raspberry Pi Pico.",
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
    description: "Real-time monitoring platform for hydroponics systems.",
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
