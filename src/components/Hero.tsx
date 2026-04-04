import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative">
    <div className="max-w-3xl text-center space-y-6 animate-fade-in-up">
      <p className="text-primary text-sm font-medium tracking-widest uppercase">Hello, I'm</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight">
        {profile.name}
      </h1>
      <p className="text-xl sm:text-2xl text-primary font-medium">{profile.title}</p>
      <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">{profile.tagline}</p>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Button asChild size="lg">
          <a href="#projects">
            <FolderOpen size={18} />
            View Projects
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={profile.cvPath} download>
            <Download size={18} />
            Download CV
          </a>
        </Button>
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-10 text-muted-foreground hover:text-foreground transition-colors animate-bounce-slow"
      aria-label="Scroll down"
    >
      <ArrowDown size={24} />
    </a>
  </section>
);

export default Hero;
