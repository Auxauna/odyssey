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
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-card rounded-2xl p-1.5 flex items-center gap-2 transition-all duration-300 focus-within:border-resend-blue/30">
        <input
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError("");
          }}
          placeholder="Paste a Resend case study URL..."
          disabled={isLoading}
          className="flex-1 bg-transparent px-4 py-3 text-sm text-resend-white placeholder:text-resend-gray-200 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 rounded-xl bg-resend-blue text-white text-sm font-medium transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generating
            </span>
          ) : (
            "Generate"
          )}
        </button>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-red-400 text-center"
        >
          {error}
        </motion.p>
      )}
      <p className="mt-4 text-center text-xs text-resend-gray-200">
        Try{" "}
        <button
          type="button"
          onClick={() => setUrl("https://resend.com/customers/gumroad")}
          className="text-resend-blue hover:underline"
        >
          resend.com/customers/gumroad
        </button>
        {" "}or{" "}
        <button
          type="button"
          onClick={() => setUrl("https://resend.com/customers/replit")}
          className="text-resend-blue hover:underline"
        >
          resend.com/customers/replit
        </button>
      </p>
    </motion.form>
  );
}
