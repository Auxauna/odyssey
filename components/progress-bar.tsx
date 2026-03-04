"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface ProgressBarProps {
  onComplete: () => void;
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
];

const DURATION = 3500; // 3.5 seconds
const LORE_INTERVAL = 300;

export function ProgressBar({ onComplete }: ProgressBarProps) {
  const [percent, setPercent] = useState(0);
  const [loreIndex, setLoreIndex] = useState(0);
  const startRef = useRef(Date.now());

  // Animate percent from 0 to 100 over DURATION
  useEffect(() => {
    const start = startRef.current;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(Math.round((elapsed / DURATION) * 100), 100);
      setPercent(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Brief pause then reveal
        setTimeout(onComplete, 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  // Cycle lore text
  useEffect(() => {
    const interval = setInterval(() => {
      setLoreIndex((prev) => (prev + 1) % LORE_LINES.length);
    }, LORE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // How many dots are filled
  const filledDots = Math.floor((percent / 100) * 12);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto mt-32 text-center"
    >
      {/* Big percentage */}
      <div className="mb-8">
        <span className="text-7xl font-bold tracking-tighter font-mono tabular-nums text-text">
          {percent}
        </span>
        <span className="text-3xl font-light text-text-dim ml-1">%</span>
      </div>

      {/* Thin green progress bar */}
      <div className="progress-track w-full mb-8">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Lore text */}
      <motion.p
        key={loreIndex}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        className="text-sm text-text-muted italic tracking-wide font-mono"
      >
        {LORE_LINES[loreIndex]}
      </motion.p>

      {/* 12 stage dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
              i < filledDots ? "bg-green" : "bg-text-dim/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
