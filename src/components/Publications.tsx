import { ExternalLink } from "lucide-react";
import { publications } from "@/data/profile";

const Publications = () => (
  <section id="publications" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Publications</h2>
      {publications.map((pub, i) => (
        <a
          key={i}
          href={pub.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors"
        >
          <ExternalLink size={14} />
          {pub.doi}
        </a>
      ))}
    </div>
  </section>
);

export default Publications;
