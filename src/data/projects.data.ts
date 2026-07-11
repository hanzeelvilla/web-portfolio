import type { Project } from "../types";
import esliConsole from "../assets/images/projects/esli-ultima-mision/esli-console.jpg";
import hydroMasters from "../assets/images/projects/hydromasters/hydromasters.jpeg";

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
    image: esliConsole,
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
    image: hydroMasters,
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
