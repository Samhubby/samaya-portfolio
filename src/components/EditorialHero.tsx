import React, { useState } from "react";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Check, Copy, ArrowUpRight } from "lucide-react";

const EditorialHero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<?php

namespace App\\Services\\Banking;

use App\\Models\\CaseSubmission;
use App\\Jobs\\PublishBpmEvent;

class BankingCaseDispatcher
{
    public function dispatch(CaseSubmission $case): void
    {
        // Asynchronous BPM event integration via RabbitMQ
        PublishBpmEvent::dispatch(
            queue: 'bpm.banking.sync',
            payload: $case->toAuditEvent()
        )->onQueue('high-priority');
    }
}`;

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(codeSnippet).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[var(--line)]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              Associate Backend Developer &bull; Kathmandu, Nepal
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
              Samaya{" "}
              <em className="italic font-serif text-[var(--accent)] font-normal">
                Mahate
              </em>
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl mb-8">
              I build resilient BPM dashboards, asynchronous message queues, and cloud backend
              architectures for banking and enterprise systems. Focused on reliability, high
              availability, and automated workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-3 rounded-md bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-semibold hover:opacity-90 transition-all btn-press inline-flex items-center gap-2 shadow-sm"
              >
                <span>View Systems &amp; Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={profile.cvPath}
                download
                className="px-5 py-3 rounded-md border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] transition-all btn-press inline-flex items-center gap-2"
              >
                <Download size={15} className="text-[var(--accent)]" />
                <span>Download CV</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 ml-1"
              >
                <span>Email Me</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Artifact Code Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-surface)] p-6 shadow-sm card-hover relative overflow-hidden">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--line)]">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[11px] font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                  Available for Freelance &amp; Systems Roles
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy code snippet"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                  title="Copy snippet"
                >
                  {copied ? <Check size={14} className="text-[var(--accent)]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Code Snippet - Permanent dark IDE container for optimal syntax contrast across themes */}
              <div className="font-mono text-[12px] sm:text-[12.5px] leading-relaxed text-[#FBFAF7] bg-[#101816] p-4 rounded-md border border-[#223631] overflow-x-auto selection:bg-[#85C0AB]/30">
                <div className="text-[#85C0AB]/60 mb-2">// Enterprise BPM Event Dispatcher</div>
                <div>
                  <span className="text-[#85C0AB]">class</span>{" "}
                  <span className="text-[#E5C07B] font-semibold">BankingCaseDispatcher</span>
                </div>
                <div>{"{"}</div>
                <div className="pl-4">
                  <span className="text-[#85C0AB]">public function</span>{" "}
                  <span className="text-[#61AFEF]">dispatch</span>(CaseSubmission $case):{" "}
                  <span className="text-[#85C0AB]">void</span>
                </div>
                <div className="pl-4">{"{"}</div>
                <div className="pl-8 text-[#A7C2B8]/70">
                  // Event integration via RabbitMQ
                </div>
                <div className="pl-8">
                  PublishBpmEvent::<span className="text-[#61AFEF]">dispatch</span>(
                </div>
                <div className="pl-12">
                  queue: <span className="text-[#98C379]">'bpm.banking.sync'</span>,
                </div>
                <div className="pl-12 text-[#FBFAF7]">
                  payload: $case-&gt;toAuditEvent()
                </div>
                <div className="pl-8">
                  )-&gt;onQueue(<span className="text-[#98C379]">'high-priority'</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              {/* Card Bottom Meta */}
              <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11.5px] text-[var(--text-muted)]">
                <span className="font-medium">Amnil Technologies &bull; BSIT (2022–2026)</span>
                <span className="font-semibold text-[var(--gold)]">AWS Solutions Architect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialHero;
