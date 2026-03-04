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

  const targetPercent = isComplete ? 100 : Math.min(Math.round((stageCount / 12) * 95), 95);

  useEffect(() => {
    if (displayPercent < targetPercent) {
      const timer = setTimeout(() => {
        setDisplayPercent((prev) => Math.min(prev + 1, targetPercent));
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [displayPercent, targetPercent]);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => setDisplayPercent(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  const loreIndex = Math.min(stageCount, LORE_LINES.length - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto mt-24 text-center relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-resend-blue/[0.06] rounded-full blur-[80px] pointer-events-none" />

      {/* Percentage */}
      <motion.div className="relative mb-8">
        <span className="text-7xl font-bold tracking-tighter text-resend-white tabular-nums">
          {displayPercent}
        </span>
        <span className="text-3xl font-light text-resend-gray-200 ml-1">%</span>
      </motion.div>

      {/* Progress track */}
      <div className="relative h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden mb-8">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #00A3FF, #A855F7, #00A3FF)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${displayPercent}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {/* Glow on leading edge */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-resend-blue blur-md"
          animate={{ left: `${displayPercent}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Lore text */}
      <motion.p
        key={loreIndex}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.4 }}
        className="text-sm text-resend-gray-200 italic tracking-wide"
      >
        {LORE_LINES[loreIndex]}
      </motion.p>

      {/* Stage dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i < stageCount
                ? "bg-resend-blue"
                : i === stageCount
                ? "bg-resend-blue/50 animate-pulse"
                : "bg-white/10"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.03 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
