import { ExternalLink } from "lucide-react";
import { publications } from "@/data/profile";

const Publications = () => (
  <section id="publications" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Publications</h2>
      {publications.map((pub, i) => (
        <div key={i} className="rounded-lg border border-border bg-card p-6 space-y-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <h3 className="text-base font-semibold text-foreground leading-snug">{pub.title}</h3>
          <p className="text-xs text-primary font-medium">{pub.journal}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-foreground transition-colors"
          >
            <ExternalLink size={12} />
            {pub.doi}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Publications;
