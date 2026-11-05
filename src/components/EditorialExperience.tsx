import React from "react";
import { experience } from "@/data/profile";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const EditorialExperience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Career &bull; 02
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
              Work &amp; Experience
            </h2>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 md:mt-0 max-w-sm">
            Proven track record engineering enterprise banking software and high-reliability event pipelines.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.company}
              className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-primary)] card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--line)]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-[var(--accent)]" />
                    <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                      {job.company}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-[var(--accent)]">
                    {job.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[13px] text-[var(--text-muted)] font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-[var(--gold)]" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-[var(--gold)]" />
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                    Key Responsibilities &amp; Engineering Deliverables
                  </h4>
                  <ul className="space-y-3 text-[14px] text-[var(--text-muted)] leading-relaxed">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-[var(--bg-surface)] p-5 rounded-md border border-[var(--line)]">
                  <h4 className="text-[12px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-3">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Laravel", "MySQL", "RabbitMQ", "Docker", "Jenkins", "REST APIs", "GitLab"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--line)] text-[12px] font-mono text-[var(--text-primary)]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialExperience;
