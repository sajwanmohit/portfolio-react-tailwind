import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsPreview from "../components/ProjectsPreview";
import ContactCTA from "../components/ContactCTA";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}

export default Home;
