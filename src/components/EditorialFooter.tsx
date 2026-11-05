import React from "react";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

const EditorialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-primary)] py-10 transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-[var(--text-muted)]">
        <div>
          <span className="font-serif font-bold text-[var(--text-primary)]">Samaya Mahate</span>
          <span className="mx-2">&bull;</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Email
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors btn-press ml-2"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto px-6 pt-4 text-center text-[11px] text-[var(--text-muted)] opacity-60">
        Engineered with Vite, React & Taste Skill 2.5 standards.
      </div>
    </footer>
  );
};

export default EditorialFooter;
