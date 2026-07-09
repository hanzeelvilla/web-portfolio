import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

export const WebPortfolioApp = () => {
  return (
    <div className="min-h-screen px-6 py-4">
      <Navbar />

      <main className="mx-auto mt-12 flex max-w-6xl flex-col gap-8 md:mt-24">
        <Hero />
      </main>
    </div>
  );
};
