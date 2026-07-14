import { Navbar } from "./components/layout/Navbar";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";

export const WebPortfolioApp = () => {
  return (
    <div className="min-h-screen px-6 py-4">
      <Navbar />

      <main className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 md:mt-24 md:gap-24">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Footer />
      </main>
    </div>
  );
};
