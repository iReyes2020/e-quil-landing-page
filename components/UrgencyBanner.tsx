"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-brand-teal text-white py-3 px-4 flex items-center justify-between gap-4"
      >
        <p className="text-sm md:text-base font-medium flex-1">
          🚀 <span className="font-bold">Now Onboarding New Partners:</span> We're currently accepting a limited number of new companies into our early access program. Request a demo today to secure your spot.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="shrink-0 text-white hover:text-white/80 transition-colors"
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default UrgencyBanner;
