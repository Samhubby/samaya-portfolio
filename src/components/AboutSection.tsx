import React from "react";
import { Server, Cpu, ShieldCheck, Layers } from "lucide-react";

const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Layers size={18} className="text-[var(--accent)]" />,
      title: "Asynchronous Decoupling",
      description:
        "Using RabbitMQ queues to decouple heavy background jobs, API synchronizations, and reporting workflows so customer portals never stall.",
    },
    {
      icon: <Server size={18} className="text-[var(--accent)]" />,
      title: "Enterprise BPM Architectures",
      description:
        "Hands-on production experience developing banking process management dashboards in Laravel to track, audit, and route high-volume cases.",
    },
    {
      icon: <Cpu size={18} className="text-[var(--accent)]" />,
      title: "Cloud & DevOps Reliability",
      description:
        "AWS Certified Solutions Architect Associate leveraging Docker containers, Jenkins pipelines, and strict security practices for continuous deployment.",
    },
    {
      icon: <ShieldCheck size={18} className="text-[var(--accent)]" />,
      title: "Cybersecurity & Research Grounding",
      description:
        "Creator of Flag-Forge CTF platform and author of peer-reviewed research analyzing technology implementation in sustainable public systems.",
    },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--bg-primary)] transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
              Background &bull; 01
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] leading-tight mb-6">
              Engineering Philosophy &amp; Background
            </h2>
            <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[var(--text-muted)] leading-relaxed">
              <p>
                I am an Associate Backend Developer and BSIT student at{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Presidential Graduate School
                </strong>{" "}
                (2022–2026), based in Kathmandu. My work focuses on constructing dependable,
                high-throughput backend foundations that solve complex operational problems.
              </p>
              <p>
                At{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Amnil Technologies
                </strong>
                , I engineered core banking BPM dashboards and client-facing portals, integrating external
                services through RabbitMQ message brokers and establishing structured database architectures.
              </p>
              <p>
                I believe backend software should be predictable, observable, and built with clear
                abstractions. When engineering freelance or system roles, I prioritize clean API contracts,
                proper exception boundaries, and resilient cloud deployments.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[var(--accent-soft)] flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-[17px] font-medium text-[var(--text-primary)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
