import type { TechStack } from "../types";
import {
  azureLogo,
  cloudflareLogo,
  dockerLogo,
  expressJsLogo,
  gitLogo,
  javascriptLogo,
  mongoDbLogo,
  mySqlLogo,
  nestJsLogo,
  nextJsLogo,
  nodeJsLogo,
  postgreSqlLogo,
  pythonLogo,
  reactLogo,
  tailwindCssLogo,
  typescriptLogo,
  vercelLogo,
} from "./techLogos.data";

export const techStackData: TechStack = {
  languages: [typescriptLogo, javascriptLogo, pythonLogo],
  frontend: [reactLogo, nextJsLogo, tailwindCssLogo],
  backend: [
    nodeJsLogo,
    expressJsLogo,
    nestJsLogo,
    mySqlLogo,
    postgreSqlLogo,
    mongoDbLogo,
  ],
  devops: [gitLogo, dockerLogo, azureLogo, cloudflareLogo, vercelLogo],
};
