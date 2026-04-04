import { Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-foreground">About Me</h2>
      <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <span className="inline-flex items-center gap-2 text-sm text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} /> {profile.location}
        </span>
      </div>

      <div className="flex gap-4 pt-2">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default About;
