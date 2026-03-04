"use client";

import { motion } from "framer-motion";
import { STORIES } from "@/lib/stories";

interface StorySelectorProps {
  onSelect: (key: string) => void;
}

const STORY_KEYS = Object.keys(STORIES);

export function StorySelector({ onSelect }: StorySelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6 }}
      className="pt-20 pb-16"
    >
      <div className="section-label mb-8">Customer Stories</div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
        Every customer has
        <br />
        an origin story.
      </h1>

      <p className="text-text-muted text-base mb-12 max-w-md">
        Select a Resend customer to explore their Hero&apos;s Journey.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {STORY_KEYS.map((key, i) => {
          const story = STORIES[key];
          return (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => onSelect(key)}
              className={`card p-5 text-left cursor-pointer group ${
                i === STORY_KEYS.length - 1 && STORY_KEYS.length % 3 === 1
                  ? "lg:col-start-2"
                  : i === STORY_KEYS.length - 2 && STORY_KEYS.length % 3 === 2
                  ? "lg:col-start-1"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green" />
                <span className="font-mono text-sm font-semibold text-text tracking-wide">
                  {story.company}
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {story.industry}
              </p>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
