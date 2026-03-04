"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative pt-24 pb-16 text-center">
      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-resend-blue/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs uppercase tracking-[0.25em] text-resend-gray-200 mb-6"
      >
        Customer story generator
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto"
      >
        <span className="text-resend-white">Every customer</span>
        <br />
        <span className="bg-gradient-to-r from-resend-white via-resend-blue to-resend-white bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_4s_ease-in-out_infinite]">
          has an origin story.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base sm:text-lg text-resend-gray-100 max-w-lg mx-auto leading-relaxed mb-2"
      >
        Paste a Resend case study. Watch it transform into
        <br className="hidden sm:block" />
        {" "}a Hero&apos;s Journey narrative.
      </motion.p>
    </div>
  );
}
