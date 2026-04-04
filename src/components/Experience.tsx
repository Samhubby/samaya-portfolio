import { experience } from "@/data/profile";

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>

      <div className="relative border-l-2 border-border pl-8 space-y-10">
        {experience.map((exp, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-sm text-primary font-medium">{exp.period}</p>
            <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
            <p className="text-muted-foreground text-sm">{exp.company}</p>
            <ul className="mt-3 space-y-2">
              {exp.responsibilities.map((r, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▪</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
