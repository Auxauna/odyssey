"use client";

import { motion } from "framer-motion";
import type { HeroJourney } from "@/lib/schema";
import { useState } from "react";

interface JourneyViewProps {
  journey: Partial<HeroJourney>;
}

const ACT_NAMES: Record<string, string> = {
  DEPARTURE: "Act I — Departure",
  INITIATION: "Act II — Initiation",
  RETURN: "Act III — Return",
};

const FOUNDATION_LABELS: { key: keyof NonNullable<HeroJourney["foundations"]>; label: string }[] = [
  { key: "wound", label: "The Wound" },
  { key: "lie", label: "The Lie" },
  { key: "want", label: "The Want" },
  { key: "need", label: "The Need" },
  { key: "shadow", label: "The Shadow" },
  { key: "elixir", label: "The Elixir" },
];

export function JourneyView({ journey }: JourneyViewProps) {
  const [copied, setCopied] = useState(false);

  const stages = journey.stages ?? [];

  const handleCopy = async () => {
    let text = `# ${journey.company} — ${journey.tagline ?? ""}\n\n`;
    text += `Industry: ${journey.industry ?? ""}\n\n`;

    if (journey.foundations) {
      text += `## Foundations\n`;
      for (const f of FOUNDATION_LABELS) {
        const val = journey.foundations[f.key];
        if (val) text += `- ${f.label}: ${val}\n`;
      }
      text += `\n`;
    }

    let lastAct = "";
    for (const stage of stages) {
      if (stage.act && stage.act !== lastAct) {
        text += `\n--- ${ACT_NAMES[stage.act] ?? stage.act} ---\n\n`;
        lastAct = stage.act;
      }
      text += `## ${stage.number}. ${stage.name}\n${stage.narrative}\n\n`;
    }

    if (journey.transformationArc) {
      text += `## The Transformation\n${journey.transformationArc}\n`;
    }

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let lastAct = "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto mt-12 mb-16"
    >
      {/* The scroll */}
      <div className="scroll-container rounded-sm shadow-2xl shadow-black/50 px-10 sm:px-16 py-16 relative overflow-hidden">
        {/* Top ornamental edge */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Title block */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-muted mb-4 font-[family-name:var(--font-sans)]">
            The Hero&apos;s Journey of
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-3 leading-tight">
            {journey.company}
          </h2>
          {journey.industry && (
            <p className="text-sm uppercase tracking-[0.2em] text-ink-muted font-[family-name:var(--font-sans)]">
              {journey.industry}
            </p>
          )}
          {journey.tagline && (
            <p className="mt-4 text-lg italic text-ink-light max-w-md mx-auto leading-relaxed">
              &ldquo;{journey.tagline}&rdquo;
            </p>
          )}

          {/* Ornamental divider */}
          <div className="ornament mt-8">
            <span className="text-gold text-xs tracking-[0.2em]">&#9830;</span>
          </div>
        </div>

        {/* Foundations */}
        {journey.foundations && (
          <div className="mb-12">
            <h3 className="text-center text-xs uppercase tracking-[0.3em] text-ink-muted mb-8 font-[family-name:var(--font-sans)]">
              Psychological Foundations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {FOUNDATION_LABELS.map((f) => {
                const val = journey.foundations?.[f.key];
                if (!val) return null;
                return (
                  <div key={f.key}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-1 font-[family-name:var(--font-sans)]">
                      {f.label}
                    </p>
                    <p className="text-sm text-ink-light leading-relaxed">{val}</p>
                  </div>
                );
              })}
            </div>
            <div className="ornament mt-10">
              <span className="text-gold text-xs tracking-[0.2em]">&#9830;</span>
            </div>
          </div>
        )}

        {/* Stages — continuous narrative */}
        <div className="space-y-8">
          {stages.map((stage, i) => {
            const showActHeader = stage.act && stage.act !== lastAct;
            if (stage.act) lastAct = stage.act;
            const isFirst = i === 0;

            return (
              <div key={stage.number ?? i}>
                {showActHeader && (
                  <div className="ornament my-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold font-[family-name:var(--font-sans)]">
                      {ACT_NAMES[stage.act!] ?? stage.act}
                    </span>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-ink-muted mb-3 font-[family-name:var(--font-sans)]">
                    {stage.number}. {stage.name}
                  </h4>
                  <p
                    className={`text-base text-ink leading-[1.9] ${
                      isFirst ? "drop-cap" : ""
                    }`}
                  >
                    {stage.narrative}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transformation Arc */}
        {journey.transformationArc && (
          <>
            <div className="ornament my-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold font-[family-name:var(--font-sans)]">
                The Transformation
              </span>
            </div>
            <p className="text-base text-ink leading-[1.9] italic">
              {journey.transformationArc}
            </p>
          </>
        )}

        {/* Bottom ornament */}
        <div className="text-center mt-12 text-gold text-2xl">&#10041;</div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Copy button — outside the scroll, in the dark UI */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-xs font-medium text-resend-gray-100 hover:text-resend-white hover:border-white/20 transition-all"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-resend-return" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied to clipboard
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
      </div>
    </motion.div>
  );
}
