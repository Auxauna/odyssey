"use client";

import { motion } from "framer-motion";
import type { HeroJourney } from "@/lib/schema";
import { useState } from "react";

interface JourneyViewProps {
  journey: HeroJourney;
  onReset: () => void;
}

const ACT_LABELS: Record<string, string> = {
  DEPARTURE: "ACT I \u00B7 DEPARTURE",
  INITIATION: "ACT II \u00B7 INITIATION",
  RETURN: "ACT III \u00B7 RETURN",
};

const FOUNDATION_LABELS: { key: keyof HeroJourney["foundations"]; label: string }[] = [
  { key: "wound", label: "The Wound" },
  { key: "lie", label: "The Lie" },
  { key: "want", label: "The Want" },
  { key: "need", label: "The Need" },
  { key: "shadow", label: "The Shadow" },
  { key: "elixir", label: "The Elixir" },
];

export function JourneyView({ journey, onReset }: JourneyViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let text = `# ${journey.company} — ${journey.tagline}\n\n`;
    text += `Industry: ${journey.industry}\n\n`;

    text += `## Foundations\n`;
    for (const f of FOUNDATION_LABELS) {
      text += `- ${f.label}: ${journey.foundations[f.key]}\n`;
    }
    text += `\n`;

    let lastAct = "";
    for (const stage of journey.stages) {
      if (stage.act !== lastAct) {
        text += `\n--- ${ACT_LABELS[stage.act]} ---\n\n`;
        lastAct = stage.act;
      }
      text += `## ${stage.number}. ${stage.name}\n${stage.narrative}\n\n`;
    }

    text += `## The Transformation\n${journey.transformationArc}\n`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let lastAct = "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto mt-12 mb-16"
    >
      {/* Terminal code block */}
      <div className="terminal mb-10">
        <div className="terminal-header">
          <span className="terminal-dot bg-dot-red" />
          <span className="terminal-dot bg-dot-yellow" />
          <span className="terminal-dot bg-dot-green" />
          <span className="ml-3 text-xs text-text-dim font-mono">journey.json</span>
        </div>
        <div className="terminal-body">
          <span className="text-text-dim">{"{"}</span>
          <br />
          <span className="text-text-dim ml-4">{"  "}company: </span>
          <span className="text-green">&quot;{journey.company}&quot;</span>
          <span className="text-text-dim">,</span>
          <br />
          <span className="text-text-dim ml-4">{"  "}industry: </span>
          <span className="text-green">&quot;{journey.industry}&quot;</span>
          <span className="text-text-dim">,</span>
          <br />
          <span className="text-text-dim ml-4">{"  "}stages: </span>
          <span className="text-green">{journey.stages.length}</span>
          <span className="text-text-dim">,</span>
          <br />
          <span className="text-text-dim ml-4">{"  "}status: </span>
          <span className="text-green">&quot;complete&quot;</span>
          <br />
          <span className="text-text-dim">{"}"}</span>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t border-border text-[11px] font-mono text-text-dim">
          <span>resend.com/customers</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            200 OK
          </span>
        </div>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl sm:text-2xl italic text-text-muted leading-relaxed mb-12 max-w-2xl"
      >
        &ldquo;{journey.tagline}&rdquo;
      </motion.p>

      {/* Foundations */}
      <div className="mb-14">
        <div className="section-label mb-8">Psychological Foundations</div>
        <div className="space-y-0">
          {FOUNDATION_LABELS.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="py-4 border-b border-border last:border-b-0"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-green">
                {f.label}
              </span>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {journey.foundations[f.key]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Acts + Stages */}
      <div className="space-y-8 mb-14">
        {journey.stages.map((stage, i) => {
          const showActHeader = stage.act !== lastAct;
          lastAct = stage.act;

          return (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.04 }}
            >
              {showActHeader && (
                <div className="section-label mb-8 mt-12 first:mt-0">
                  {ACT_LABELS[stage.act]}
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs text-text-dim uppercase tracking-widest mb-3">
                  {stage.number}. {stage.name}
                </h4>
                <p className="text-[15px] text-text/90 leading-[1.85]">
                  {stage.narrative}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Transformation */}
      <div className="mb-14">
        <div className="section-label mb-6">The Transformation</div>
        <p className="text-[15px] italic text-text-muted leading-[1.85]">
          {journey.transformationArc}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 pt-4">
        <button onClick={handleCopy} className="btn-outline flex items-center gap-2">
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy narrative
            </>
          )}
        </button>
        <button onClick={onReset} className="btn-green">
          Generate another
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-[11px] text-text-dim">
        <p>
          Built by{" "}
          <a
            href="https://linkedin.com/in/jacobrucker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
          >
            Jacob Rucker
          </a>
        </p>
      </footer>
    </motion.div>
  );
}
