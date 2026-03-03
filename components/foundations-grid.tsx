"use client";

import { motion } from "framer-motion";
import type { HeroJourney } from "@/lib/schema";

const foundationMeta: {
  key: keyof HeroJourney["foundations"];
  label: string;
  emoji: string;
}[] = [
  { key: "wound", label: "The Wound", emoji: "💔" },
  { key: "lie", label: "The Lie", emoji: "🎭" },
  { key: "want", label: "The Want", emoji: "🎯" },
  { key: "need", label: "The Need", emoji: "💡" },
  { key: "shadow", label: "The Shadow", emoji: "👤" },
  { key: "elixir", label: "The Elixir", emoji: "✨" },
];

interface FoundationsGridProps {
  foundations: Partial<HeroJourney["foundations"]> | undefined;
}

export function FoundationsGrid({ foundations }: FoundationsGridProps) {
  if (!foundations) return null;

  const hasAny = foundationMeta.some((f) => foundations[f.key]);
  if (!hasAny) return null;

  return (
    <div className="mb-12">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-resend-gray-200 mb-6"
      >
        Psychological foundations
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {foundationMeta.map((f, i) => {
          const value = foundations[f.key];
          if (!value) return null;

          return (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{f.emoji}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-resend-gray-100">
                  {f.label}
                </span>
              </div>
              <p className="text-sm text-resend-gray-100 leading-relaxed">
                {value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
