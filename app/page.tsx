"use client";

import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState } from "react";
import { heroJourneySchema, type HeroJourney } from "@/lib/schema";
import { Header } from "@/components/header";
import { UrlInput } from "@/components/url-input";
import { JourneyView } from "@/components/journey-view";
import { ProgressBar } from "@/components/loading-skeleton";
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
        // Brief pause then reveal
        setTimeout(() => setShowScroll(true), 600);
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
    <main className="min-h-screen px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <Header />

        <AnimatePresence>
          {!showScroll && (
            <motion.div exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-2xl glass-card border-red-500/20 text-center max-w-2xl mx-auto"
            >
              <p className="text-sm text-red-400">{error}</p>
              <button
                onClick={() => setError(null)}
                className="mt-2 text-xs text-resend-gray-200 hover:text-resend-white transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress bar while generating */}
        <AnimatePresence>
          {isLoading && !showScroll && (
            <ProgressBar stageCount={stageCount} isComplete={isComplete} />
          )}
        </AnimatePresence>

        {/* The scroll reveal */}
        <AnimatePresence>
          {showScroll && completedJourney && (
            <>
              <JourneyView journey={completedJourney} />

              {/* Generate another */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-center mt-2"
              >
                <button
                  onClick={() => {
                    setShowScroll(false);
                    setCompletedJourney(null);
                  }}
                  className="text-xs text-resend-gray-200 hover:text-resend-white transition-colors"
                >
                  Generate another journey
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-resend-gray-300">
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
            {" "}— Powered by Claude + Vercel AI SDK
          </p>
        </footer>
      </div>
    </main>
  );
}
