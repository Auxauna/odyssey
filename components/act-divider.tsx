"use client";

import { motion } from "framer-motion";

const actConfig = {
  DEPARTURE: { label: "Act I — Departure", color: "text-resend-departure", border: "border-resend-departure/30" },
  INITIATION: { label: "Act II — Initiation", color: "text-resend-initiation", border: "border-resend-initiation/30" },
  RETURN: { label: "Act III — Return", color: "text-resend-return", border: "border-resend-return/30" },
} as const;

interface ActDividerProps {
  act: keyof typeof actConfig;
}

export function ActDivider({ act }: ActDividerProps) {
  const config = actConfig[act];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 my-8"
    >
      <div className={`h-px flex-1 ${config.border} border-t`} />
      <span
        className={`text-xs font-medium uppercase tracking-[0.2em] ${config.color} font-[family-name:var(--font-geist-mono)]`}
      >
        {config.label}
      </span>
      <div className={`h-px flex-1 ${config.border} border-t`} />
    </motion.div>
  );
}
