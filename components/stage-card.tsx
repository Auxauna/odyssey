"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StageCardProps {
  number: number;
  name: string;
  act: "DEPARTURE" | "INITIATION" | "RETURN";
  narrative: string;
  emoji: string;
  isGenerating?: boolean;
}

const actColors = {
  DEPARTURE: "bg-resend-departure",
  INITIATION: "bg-resend-initiation",
  RETURN: "bg-resend-return",
};

const actTextColors = {
  DEPARTURE: "text-resend-departure",
  INITIATION: "text-resend-initiation",
  RETURN: "text-resend-return",
};

export function StageCard({
  number,
  name,
  act,
  narrative,
  emoji,
  isGenerating,
}: StageCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
        isGenerating ? "glow-active" : ""
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div
          className={`w-8 h-8 rounded-full ${actColors[act]} flex items-center justify-center text-xs font-bold text-white shrink-0`}
        >
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{emoji}</span>
            <h4 className="text-sm font-medium text-resend-white truncate">
              {name}
            </h4>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-resend-gray-200 transition-transform duration-200 shrink-0 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5">
              <div className={`h-px w-full mb-4 opacity-10 ${actColors[act]}`} />
              <p className="text-sm text-resend-gray-100 leading-relaxed">
                {narrative}
              </p>
              <span
                className={`inline-block mt-3 text-[10px] font-medium uppercase tracking-[0.15em] ${actTextColors[act]} font-[family-name:var(--font-geist-mono)]`}
              >
                Stage {number} of 12
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
