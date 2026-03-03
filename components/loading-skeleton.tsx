"use client";

import { motion } from "framer-motion";

export function LoadingSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-6">
      {/* Tagline skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-8"
      >
        <div className="skeleton h-8 w-64 mx-auto rounded-lg mb-3" />
        <div className="skeleton h-5 w-48 mx-auto rounded-lg" />
      </motion.div>

      {/* Foundations skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="skeleton h-4 w-24 rounded mb-3" />
            <div className="skeleton h-3 w-full rounded mb-2" />
            <div className="skeleton h-3 w-3/4 rounded" />
          </motion.div>
        ))}
      </div>

      {/* Stage skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="skeleton w-8 h-8 rounded-full shrink-0" />
            <div className="skeleton h-4 w-48 rounded" />
          </div>
          <div className="space-y-2">
            <div className="skeleton h-3 w-full rounded" />
            <div className="skeleton h-3 w-full rounded" />
            <div className="skeleton h-3 w-2/3 rounded" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
