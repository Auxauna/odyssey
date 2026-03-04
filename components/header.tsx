"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-6 pb-4"
    >
      <span className="font-mono text-xs tracking-wide text-text-muted">
        odyssey <span className="text-text-dim">/</span> stories
      </span>
    </motion.header>
  );
}
