"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  stageCount: number;
  isComplete: boolean;
}

const LORE_LINES = [
  "Entering the ordinary world...",
  "Hearing the call to adventure...",
  "The hero hesitates at the threshold...",
  "A mentor appears from the shadows...",
  "Crossing into the unknown...",
  "Allies and enemies reveal themselves...",
  "Approaching the inmost cave...",
  "The ordeal begins...",
  "Seizing the reward...",
  "The road back unfolds...",
  "Resurrection — the final test...",
  "Returning with the elixir...",
  "The tale is written.",
];

export function ProgressBar({ stageCount, isComplete }: ProgressBarProps) {
  const [displayPercent, setDisplayPercent] = useState(0);

  // Calculate target percentage from stages received
  const targetPercent = isComplete ? 100 : Math.min(Math.round((stageCount / 12) * 95), 95);

  useEffect(() => {
    if (displayPercent < targetPercent) {
      const timer = setTimeout(() => {
        setDisplayPercent((prev) => Math.min(prev + 1, targetPercent));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayPercent, targetPercent]);

  useEffect(() => {
    if (isComplete) {
      setDisplayPercent(100);
    }
  }, [isComplete]);

  const loreIndex = Math.min(stageCount, LORE_LINES.length - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto mt-20 text-center"
    >
      {/* Percentage display */}
      <motion.div
        className="text-6xl font-bold tracking-tighter text-resend-white mb-6 font-[family-name:var(--font-mono)]"
        key={displayPercent}
      >
        {displayPercent}
        <span className="text-resend-gray-200 text-4xl">%</span>
      </motion.div>

      {/* Progress bar track */}
      <div className="relative h-1 w-full bg-resend-gray-400 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute inset-y-0 left-0 bg-resend-blue rounded-full progress-bar-glow"
          initial={{ width: 0 }}
          animate={{ width: `${displayPercent}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Lore text */}
      <motion.p
        key={loreIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm text-resend-gray-100 italic"
      >
        {LORE_LINES[loreIndex]}
      </motion.p>
    </motion.div>
  );
}
