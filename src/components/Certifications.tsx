import { Award } from "lucide-react";
import { certifications } from "@/data/profile";

const Certifications = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Certifications</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-5 space-y-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <Award size={20} className="text-primary" />
            <h3 className="text-sm font-semibold text-foreground leading-snug">{c.name}</h3>
            <p className="text-xs text-muted-foreground">{c.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
