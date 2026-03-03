"use client";

import { motion } from "framer-motion";
import type { HeroJourney } from "@/lib/schema";
import { FoundationsGrid } from "./foundations-grid";
import { StageCard } from "./stage-card";
import { ActDivider } from "./act-divider";
import { TransformationArc } from "./transformation-arc";
import { useState } from "react";

interface JourneyViewProps {
  journey: Partial<HeroJourney> | undefined;
  isStreaming: boolean;
}

export function JourneyView({ journey, isStreaming }: JourneyViewProps) {
  const [copied, setCopied] = useState(false);

  if (!journey) return null;

  const stages = journey.stages ?? [];
  const stageCount = stages.length;

  // Group stages by act for dividers
  let lastAct: string | null = null;

  const handleCopy = async () => {
    if (!journey.company) return;

    let text = `# ${journey.company} — ${journey.tagline ?? ""}\n\n`;
    text += `Industry: ${journey.industry ?? ""}\n\n`;

    if (journey.foundations) {
      text += `## Foundations\n`;
      const f = journey.foundations;
      if (f.wound) text += `- Wound: ${f.wound}\n`;
      if (f.lie) text += `- Lie: ${f.lie}\n`;
      if (f.want) text += `- Want: ${f.want}\n`;
      if (f.need) text += `- Need: ${f.need}\n`;
      if (f.shadow) text += `- Shadow: ${f.shadow}\n`;
      if (f.elixir) text += `- Elixir: ${f.elixir}\n`;
      text += `\n`;
    }

    for (const stage of stages) {
      text += `## Stage ${stage.number}: ${stage.emoji} ${stage.name} [${stage.act}]\n`;
      text += `${stage.narrative}\n\n`;
    }

    if (journey.transformationArc) {
      text += `## The Transformation\n${journey.transformationArc}\n`;
    }

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Company headline */}
      {journey.company && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
            {journey.company}
          </h2>
          {journey.industry && (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-resend-gray-200 font-[family-name:var(--font-geist-mono)] mb-2">
              {journey.industry}
            </p>
          )}
          {journey.tagline && (
            <p className="text-base text-resend-gray-100 italic max-w-xl mx-auto">
              &ldquo;{journey.tagline}&rdquo;
            </p>
          )}

          {/* Copy button */}
          {!isStreaming && stageCount === 12 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleCopy}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-resend-gray-100 hover:text-resend-white hover:border-white/20 transition-all"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-resend-return" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Foundations */}
      <FoundationsGrid foundations={journey.foundations} />

      {/* Stages */}
      <div className="space-y-3">
        {stages.map((stage, i) => {
          const showDivider = stage.act && stage.act !== lastAct;
          if (stage.act) lastAct = stage.act;
          const isLastStage = i === stageCount - 1;
          const isCurrentlyGenerating = isStreaming && isLastStage;

          return (
            <div key={stage.number ?? i}>
              {showDivider && <ActDivider act={stage.act as "DEPARTURE" | "INITIATION" | "RETURN"} />}
              <StageCard
                number={stage.number ?? i + 1}
                name={stage.name ?? ""}
                act={(stage.act as "DEPARTURE" | "INITIATION" | "RETURN") ?? "DEPARTURE"}
                narrative={stage.narrative ?? ""}
                emoji={stage.emoji ?? "⏳"}
                isGenerating={isCurrentlyGenerating}
              />
            </div>
          );
        })}
      </div>

      {/* Streaming indicator */}
      {isStreaming && stageCount < 12 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 mt-6 text-xs text-resend-gray-200"
        >
          <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Generating stage {stageCount + 1} of 12...
        </motion.div>
      )}

      {/* Transformation Arc */}
      {journey.transformationArc && journey.company && (
        <TransformationArc text={journey.transformationArc} company={journey.company} />
      )}
    </div>
  );
}
