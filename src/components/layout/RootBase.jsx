import { About } from "../../pages/About";
import { Certificates } from "../../pages/Certificates";
import { Contact } from "../../pages/Contact";
import { Experience } from "../../pages/Experience";
import { Home } from "../../pages/Home";
import { Projects } from "../../pages/Projects";
import { Skills } from "../../pages/Skills";

export function RootBase() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
