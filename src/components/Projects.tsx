import { ExternalLink } from "lucide-react";
import { projects } from "@/data/profile";

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-6 space-y-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors" aria-label="Visit live site">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-primary">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
