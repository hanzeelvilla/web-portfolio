import {
  SiArduino,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import type { TechLogo } from "../types/techLogo";

export const arduinoLogo: TechLogo = {
  name: "Arduino",
  Icon: SiArduino,
  hoverColor: "#00979D",
};

export const nodeJsLogo: TechLogo = {
  name: "Node.js",
  Icon: SiNodedotjs,
  hoverColor: "#5FA04E",
};

export const reactLogo: TechLogo = {
  name: "React",
  Icon: SiReact,
  hoverColor: "#61DAFB",
};

export const expressJsLogo: TechLogo = {
  name: "Express.js",
  Icon: SiExpress,
  hoverColor: "#374151",
};

export const mongoDbLogo: TechLogo = {
  name: "MongoDB",
  Icon: SiMongodb,
  hoverColor: "#47A248",
};
