"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    onSubmit(url.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto relative">
        {/* Glow ring around input when focused */}
        <div
          className={`absolute -inset-[1px] rounded-2xl transition-opacity duration-500 ${
            focused ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(0,163,255,0.3), rgba(168,85,247,0.2), rgba(0,163,255,0.3))",
            filter: "blur(8px)",
          }}
        />

        {/* Input container */}
        <div
          className={`relative rounded-2xl transition-all duration-300 ${
            focused
              ? "bg-white/[0.06] border border-white/20"
              : "bg-white/[0.03] border border-white/10"
          }`}
        >
          <div className="flex items-center p-1.5">
            {/* URL icon */}
            <div className="pl-4 pr-2">
              <svg className="w-4 h-4 text-resend-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>

            <input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="https://resend.com/customers/..."
              disabled={isLoading}
              className="flex-1 bg-transparent py-3 text-sm text-resend-white placeholder:text-resend-gray-300 focus:outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2.5 rounded-xl bg-resend-white text-resend-black text-sm font-medium transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating
                </span>
              ) : (
                "Generate journey"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Error */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-red-400 text-center"
        >
          {error}
        </motion.p>
      )}

      {/* Example links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-5 flex items-center justify-center gap-2 flex-wrap"
      >
        <span className="text-[11px] text-resend-gray-300">Try:</span>
        {[
          { label: "Gumroad", url: "https://resend.com/customers/gumroad" },
          { label: "Replit", url: "https://resend.com/customers/replit" },
          { label: "Raycast", url: "https://resend.com/customers/raycast" },
        ].map((example) => (
          <button
            key={example.label}
            type="button"
            onClick={() => setUrl(example.url)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-resend-gray-100 hover:text-resend-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
          >
            {example.label}
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
}
