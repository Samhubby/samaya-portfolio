import React, { useState, FormEvent } from "react";
import { profile, FORMSPREE_ENDPOINT } from "@/data/profile";
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

const EditorialContact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Unable to deliver message right now. Please email directly.");
      }
    } catch {
      setError("Network connection issue. Please email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              06 / Contact
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
              Get in Touch
            </h2>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 md:mt-0 max-w-sm">
            Available for freelance backend engineering, distributed queue integrations, and system roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-primary)] card-hover space-y-5">
              <h3 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-4">
                Direct Contact
              </h3>

              <div className="space-y-4 text-[14px]">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[var(--text-muted)]">Email</div>
                    <div className="font-medium">{profile.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[var(--text-primary)]">
                  <div className="w-8 h-8 rounded-md bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[var(--text-muted)]">Phone</div>
                    <div className="font-medium font-mono">{profile.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[var(--text-primary)]">
                  <div className="w-8 h-8 rounded-md bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[var(--text-muted)]">Location</div>
                    <div className="font-medium">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--line)] flex flex-col sm:flex-row gap-3">
                <a
                  href={profile.cvPath}
                  download
                  className="flex-1 py-2.5 px-4 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] transition-all btn-press inline-flex items-center justify-center gap-2"
                >
                  <Download size={15} className="text-[var(--accent)]" />
                  <span>Download CV</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] transition-all btn-press inline-flex items-center justify-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="text-[var(--accent)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg border border-[var(--line)] bg-[var(--bg-primary)] card-hover">
              <h3 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] mb-6">
                Fill out the form below to initiate a project discussion, ask a question, or schedule an interview.
              </p>

              {submitted ? (
                <div className="p-6 rounded-md bg-[var(--accent-soft)] border border-[var(--accent)] text-[var(--text-primary)] flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[15px] mb-1">Message Dispatched</h4>
                    <p className="text-[13px] text-[var(--text-muted)]">
                      Thank you for reaching out. I typically respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[var(--accent)] underline mt-3 inline-block hover:opacity-80 transition-opacity"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-[13px] flex items-center gap-2">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono uppercase text-[var(--text-muted)] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-[14px] placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent)] transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-mono uppercase text-[var(--text-muted)] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-3.5 py-2.5 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-[14px] placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent)] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono uppercase text-[var(--text-muted)] mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Message..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-[14px] placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent)] transition-colors outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-md bg-[var(--accent)] text-[var(--bg-primary)] font-semibold text-[14px] hover:opacity-90 transition-all btn-press flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    <Send size={15} />
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialContact;
