import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Community from "@/components/Community";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Blog />
      <Certifications />
      <Community />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
