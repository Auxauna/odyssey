"use client";

import { motion } from "framer-motion";

interface TransformationArcProps {
  text: string;
  company: string;
}

export function TransformationArc({ text, company }: TransformationArcProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-12 glass-card rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-resend-departure via-resend-initiation to-resend-return" />

      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-resend-gray-200 mb-4">
        The transformation of {company}
      </h3>
      <p className="text-base text-resend-gray-100 leading-relaxed italic">
        {text}
      </p>
    </motion.div>
  );
}
