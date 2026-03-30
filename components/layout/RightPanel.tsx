import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";

export default function RightPanel() {
  return (
    <main className="lg:w-1/2 lg:py-24">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}
