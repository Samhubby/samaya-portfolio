import React from "react";
import { projects } from "@/data/profile";
import { ArrowUpRight, Terminal, Layers, ShieldCheck } from "lucide-react";

const FeaturedSystems: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--bg-primary)] transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Case Studies &bull; 03
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
              Systems &amp; Projects
            </h2>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 md:mt-0 max-w-sm">
            Architected platforms built for high performance, continuous uptime, and real users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Flag-Forge */}
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                    <ShieldCheck size={16} />
                    Live Cybersecurity Platform
                  </div>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--accent)] hover:underline"
                    >
                      <span>flagforgectf.com</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)] mb-3">
                  {proj.name}
                </h3>

                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-6">
                  {proj.description} Engineered scalable user challenge scoring, fast Redis-backed streak
                  tracking, and automated badge progression mechanisms for students and practitioners.
                </p>

                <div className="bg-[var(--bg-primary)] p-4 rounded-md border border-[var(--line)] mb-6 text-[12.5px] font-mono space-y-1.5 text-[var(--text-muted)]">
                  <div className="text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                    <Terminal size={14} className="text-[var(--accent)]" /> Architecture Highlights:
                  </div>
                  <div>&bull; Redis cache for sub-millisecond streak validation</div>
                  <div>&bull; MongoDB for challenge flag repositories &amp; attempts</div>
                  <div>&bull; Express API with strict rate limiting &amp; anti-bruteforce</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <div className="text-[11px] font-mono uppercase text-[var(--text-muted)] mb-2 font-semibold">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--line)] text-[12px] font-mono text-[var(--text-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Project 2: Banking BPM Dashboards Case Study */}
          <div className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                  <Layers size={16} />
                  Enterprise Banking Case Study
                </div>
                <span className="text-[12px] font-mono text-[var(--gold)] font-semibold">
                  Amnil Tech
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)] mb-3">
                Banking BPM Dashboards
              </h3>

              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-6">
                Engineered critical banking process management dashboards in Laravel to monitor workflow
                queues and provide banking officers with real-time operational visibility across client
                requests.
              </p>

              <div className="bg-[var(--bg-primary)] p-4 rounded-md border border-[var(--line)] mb-6 text-[12.5px] font-mono space-y-1.5 text-[var(--text-muted)]">
                <div className="text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                  <Terminal size={14} className="text-[var(--accent)]" /> Architecture Highlights:
                </div>
                <div>&bull; Asynchronous event bus via RabbitMQ</div>
                <div>&bull; Customer case submission portal with document uploads</div>
                <div>&bull; Jenkins CI/CD deployment pipelines on Dockerized hosts</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)]">
              <div className="text-[11px] font-mono uppercase text-[var(--text-muted)] mb-2 font-semibold">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "PHP", "RabbitMQ", "MySQL", "Docker", "Jenkins"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--line)] text-[12px] font-mono text-[var(--text-primary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
