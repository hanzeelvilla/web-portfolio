import type { Project } from "../types";
import esliConsole from "../assets/images/projects/esli-ultima-mision/esli-console.webp";
import esliGameBoss1 from "../assets/images/projects/esli-ultima-mision/esli-game-boss1.mp4";
import esliGameBoss1Poster from "../assets/images/projects/esli-ultima-mision/esli-game-boss1-poster.webp";
import esliGameBoss2 from "../assets/images/projects/esli-ultima-mision/esli-game-boss2.mp4";
import esliGameBoss2Poster from "../assets/images/projects/esli-ultima-mision/esli-game-boss2-poster.webp";

import hydroMastersDemo from "../assets/images/projects/hydromasters/hydromasters-demo.mp4";
import hydroMastersDemoPoster from "../assets/images/projects/hydromasters/hydromasters-demo-poster.webp";
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
        poster: esliGameBoss1Poster,
        width: 1280,
        height: 720,
      },
      {
        type: "video",
        src: esliGameBoss2,
        poster: esliGameBoss2Poster,
        width: 1280,
        height: 720,
      },
      { type: "image", src: esliConsole, width: 1200, height: 1233 },
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
        poster: hydroMastersDemoPoster,
        width: 1280,
        height: 720,
      },
      { type: "image", src: hydroMasters, width: 800, height: 600 },
      { type: "image", src: pcb, width: 1200, height: 1600 },
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
