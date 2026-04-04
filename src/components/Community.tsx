import { extracurriculars } from "@/data/profile";

const Community = () => (
  <section id="community" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Community & Activities</h2>

      <div className="relative border-l-2 border-border pl-8 space-y-8">
        {extracurriculars.map((e, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-sm text-primary font-medium">{e.period}</p>
            <h3 className="text-base font-semibold text-foreground mt-1">{e.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Community;
