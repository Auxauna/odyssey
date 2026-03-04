"use client";

import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState } from "react";
import { heroJourneySchema, type HeroJourney } from "@/lib/schema";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { UrlInput } from "@/components/url-input";
import { JourneyView } from "@/components/journey-view";
import { ProgressBar } from "@/components/loading-skeleton";
import { GridBackground } from "@/components/grid-background";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const [completedJourney, setCompletedJourney] = useState<Partial<HeroJourney> | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  const { object, submit, isLoading } = useObject({
    api: "/api/generate",
    schema: heroJourneySchema,
    onFinish: ({ object }) => {
      if (object) {
        setCompletedJourney(object as Partial<HeroJourney>);
        setTimeout(() => setShowScroll(true), 800);
      }
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (url: string) => {
    setError(null);
    setCompletedJourney(null);
    setShowScroll(false);
    submit({ url });
  };

  const stageCount = object?.stages?.length ?? 0;
  const isComplete = !!completedJourney;

  return (
    <>
      <GridBackground />

      <main className="relative z-10 min-h-screen px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Header />

          <AnimatePresence mode="wait">
            {!isLoading && !showScroll && (
              <motion.div
                key="landing"
                exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
              >
                <Hero />
                <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error state */}
          <AnimatePresence>
            {error && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 p-4 rounded-xl border border-red-500/20 bg-red-500/[0.05] text-center max-w-md mx-auto"
              >
                <p className="text-sm text-red-400">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="mt-2 text-xs text-resend-gray-200 hover:text-resend-white transition-colors underline underline-offset-2"
                >
                  Try again
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <AnimatePresence>
            {isLoading && !showScroll && (
              <ProgressBar stageCount={stageCount} isComplete={isComplete} />
            )}
          </AnimatePresence>

          {/* Scroll reveal */}
          <AnimatePresence>
            {showScroll && completedJourney && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <JourneyView journey={completedJourney} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-center mt-4 mb-8"
                >
                  <button
                    onClick={() => {
                      setShowScroll(false);
                      setCompletedJourney(null);
                    }}
                    className="text-xs px-4 py-2 rounded-full border border-white/10 text-resend-gray-200 hover:text-resend-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                  >
                    Generate another
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <footer className="mt-16 text-center text-[11px] text-resend-gray-300">
            <p>
              Built by{" "}
              <a
                href="https://linkedin.com/in/jacobrucker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-resend-gray-200 hover:text-resend-white transition-colors"
              >
                Jacob Rucker
              </a>
              <span className="mx-2 text-resend-gray-400">·</span>
              Powered by Claude + Vercel AI SDK
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
