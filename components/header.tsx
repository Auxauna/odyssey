"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-16 pb-8 text-center"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-8 w-8 rounded-full bg-resend-blue flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-inter)]">
          Odyssey
        </h1>
      </div>
      <p className="text-resend-gray-100 text-sm tracking-wide">
        Every customer has an origin story.
      </p>
    </motion.header>
  );
}
