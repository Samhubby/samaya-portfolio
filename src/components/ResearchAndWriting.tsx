import React from "react";
import { publications, blogs } from "@/data/profile";
import { BookOpen, FileText, ArrowUpRight, Award } from "lucide-react";

const ResearchAndWriting: React.FC = () => {
  return (
    <section
      id="research"
      className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Publications &bull; 04
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
              Research &amp; Technical Writing
            </h2>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 md:mt-0 max-w-sm">
            Academic research in sustainable IT solutions alongside deep-dive engineering blogs for the Laravel community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Research */}
          <div className="lg:col-span-7">
            <div className="text-[12px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-3 flex items-center gap-1.5">
              <Award size={15} /> Peer-Reviewed Journal Publication
            </div>

            {publications.map((pub) => (
              <div
                key={pub.title}
                className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-primary)] card-hover"
              >
                <div className="text-[13px] font-mono text-[var(--gold)] font-medium mb-2">
                  {pub.journal}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-4 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-6">
                  {pub.description}
                </p>

                {pub.doi && (
                  <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                    <span className="text-[12px] font-mono text-[var(--text-muted)]">
                      DOI Indexed &bull; Open Access
                    </span>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:underline"
                    >
                      <span>doi.org</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Technical Articles */}
          <div className="lg:col-span-5">
            <div className="text-[12px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-3 flex items-center gap-1.5">
              <FileText size={15} /> Articles on Laravel Nepal
            </div>

            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.title}
                  className="p-6 rounded-lg border border-[var(--line)] bg-[var(--bg-primary)] card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        Technical Writing
                      </span>
                      {blog.url && (
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] hover:opacity-80 transition-opacity"
                          title="Read article"
                        >
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>

                    <h4 className="font-serif text-[17px] font-medium text-[var(--text-primary)] mb-2 leading-snug">
                      {blog.title}
                    </h4>

                    <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndWriting;
