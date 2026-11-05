import React from "react";
import { certifications, education, extracurriculars } from "@/data/profile";
import { GraduationCap, Award, Users, CheckCircle2 } from "lucide-react";

const CredentialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--bg-primary)] transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              05 / Credentials
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
              Education &amp; Certifications
            </h2>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 md:mt-0 max-w-sm">
            Formal foundations in computer science, cloud infrastructure, and community knowledge sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[13px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-2">
              <GraduationCap size={16} className="text-[var(--accent)]" />
              Education
            </div>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover"
              >
                <div className="text-[12px] font-mono text-[var(--gold)] mb-1">{edu.period}</div>
                <h3 className="font-serif text-[17px] font-medium text-[var(--text-primary)] mb-1">
                  {edu.institution}
                </h3>
                <div className="text-[13px] text-[var(--accent)] font-medium mb-2">{edu.degree}</div>
                <div className="text-[12px] text-[var(--text-muted)]">{edu.location}</div>
              </div>
            ))}
          </div>

          {/* Column 2: Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[13px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-2">
              <Award size={16} className="text-[var(--accent)]" />
              Certifications
            </div>
            <div className="p-6 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3 pb-3 border-b border-[var(--line)] last:border-none last:pb-0">
                  <CheckCircle2 size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[14px] font-medium text-[var(--text-primary)] leading-snug">
                      {cert.name}
                    </h4>
                    <div className="text-[12px] font-mono text-[var(--text-muted)]">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Community & Outreach */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[13px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-2">
              <Users size={16} className="text-[var(--accent)]" />
              Community &amp; Outreach
            </div>
            {extracurriculars.map((act) => (
              <div
                key={act.title}
                className="p-6 rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] card-hover"
              >
                <div className="text-[12px] font-mono text-[var(--gold)] mb-1">{act.period}</div>
                <h3 className="font-serif text-[17px] font-medium text-[var(--text-primary)] mb-2">
                  {act.title}
                </h3>
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
