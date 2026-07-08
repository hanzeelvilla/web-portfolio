import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { WebPortfolioApp } from "./WebPortfolioApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebPortfolioApp />
  </StrictMode>,
);
