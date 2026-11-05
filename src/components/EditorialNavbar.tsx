import React, { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const EditorialNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Systems", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/90 border-b border-[var(--line)] transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          Samaya<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--text-primary)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-md border border-[var(--line)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--bg-surface)] transition-all btn-press"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* CV Button */}
          <a
            href={profile.cvPath}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--line)] text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--bg-surface)] transition-all btn-press"
          >
            CV
            <ArrowUpRight size={14} className="text-[var(--accent)]" />
          </a>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded-md bg-[var(--accent)] text-[var(--bg-primary)] text-[13px] font-semibold hover:opacity-95 transition-all btn-press"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-9 h-9 rounded-md border border-[var(--line)] flex items-center justify-center text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--line)] bg-[var(--bg-primary)] px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--line)] flex gap-3">
            <a
              href={profile.cvPath}
              download
              className="flex-1 py-2 text-center rounded-md border border-[var(--line)] text-[14px] font-medium text-[var(--text-primary)]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-md bg-[var(--accent)] text-[var(--bg-primary)] text-[14px] font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default EditorialNavbar;
