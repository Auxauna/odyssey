"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-8 pb-4"
    >
      <div className="flex items-center justify-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-resend-white">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-sm font-medium tracking-tight text-resend-white/80">
          Odyssey
        </span>
      </div>
    </motion.header>
  );
}
