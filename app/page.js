import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
  <main className="max-w-5xl mx-auto px-6 pt-4 sm:pt-46 pb-16 flex flex-col gap-28 sm:gap-32 lg:gap-100 snap-y snap-mandatory">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}