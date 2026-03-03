"use client";

import { experimental_useObject as useObject } from "ai/react";
import { useState } from "react";
import { heroJourneySchema } from "@/lib/schema";
import { Header } from "@/components/header";
import { UrlInput } from "@/components/url-input";
import { JourneyView } from "@/components/journey-view";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  const { object, submit, isLoading, stop } = useObject({
    api: "/api/generate",
    schema: heroJourneySchema,
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (url: string) => {
    setError(null);
    submit({ url });
  };

  const hasJourney = object && (object.company || (object.stages && object.stages.length > 0));

  return (
    <main className="min-h-screen px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <Header />

        <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-2xl glass-card border-red-500/20 text-center"
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

        {isLoading && !hasJourney && <LoadingSkeleton />}

        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {hasJourney && (
          <JourneyView journey={object as any} isStreaming={isLoading} />
        )}

        {/* Stop button during generation */}
        {isLoading && hasJourney && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={stop}
              className="px-4 py-2 rounded-full glass-card text-xs font-medium text-resend-gray-100 hover:text-resend-white hover:border-white/20 transition-all"
            >
              Stop generating
            </button>
          </motion.div>
        )}

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
            {" "}— Powered by Gemini + Vercel AI SDK
          </p>
        </footer>
      </div>
    </main>
  );
}
