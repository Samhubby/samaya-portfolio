import { skills } from "@/data/profile";

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
