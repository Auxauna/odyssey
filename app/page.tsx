"use client";

import { useState, useCallback } from "react";
import { STORIES } from "@/lib/stories";
import { Header } from "@/components/header";
import { StorySelector } from "@/components/story-selector";
import { ProgressBar } from "@/components/progress-bar";
import { JourneyView } from "@/components/journey-view";
import { AnimatePresence } from "framer-motion";

type Phase = "select" | "loading" | "reveal";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("select");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    setPhase("loading");
  };

  const handleLoadingComplete = useCallback(() => {
    setPhase("reveal");
  }, []);

  const handleReset = () => {
    setSelectedKey(null);
    setPhase("select");
  };

  const journey = selectedKey ? STORIES[selectedKey] : null;

  return (
    <>
      <div className="grid-bg" />

      <main className="relative z-10 min-h-screen px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Header />

          <AnimatePresence mode="wait">
            {phase === "select" && (
              <StorySelector key="selector" onSelect={handleSelect} />
            )}

            {phase === "loading" && (
              <ProgressBar key="progress" onComplete={handleLoadingComplete} />
            )}

            {phase === "reveal" && journey && (
              <JourneyView key="journey" journey={journey} onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
