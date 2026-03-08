"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "a11y-enhanced";

export function AccessibilityToggle() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    // Read saved preference on mount
    const saved = localStorage.getItem(STORAGE_KEY) === "true";
    setEnhanced(saved);
    if (saved) {
      document.documentElement.setAttribute("data-a11y", "enhanced");
    }
  }, []);

  function toggle() {
    const next = !enhanced;
    setEnhanced(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    if (next) {
      document.documentElement.setAttribute("data-a11y", "enhanced");
    } else {
      document.documentElement.removeAttribute("data-a11y");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={enhanced}
      aria-label={
        enhanced
          ? "Switch to standard view"
          : "Switch to high contrast, large text view"
      }
      title={enhanced ? "Standard View" : "High Contrast / Large Text"}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        px-4 py-3 rounded-full shadow-lg
        font-sans font-bold text-sm
        border-2 transition-colors
        focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3
        ${
          enhanced
            ? "bg-yellow-400 text-black border-black hover:bg-yellow-300 focus-visible:outline-black"
            : "bg-church-burgundy text-white border-church-gold hover:bg-church-burgundy-dark focus-visible:outline-church-gold"
        }
      `}
    >
      {/* Large "A" icon */}
      <span aria-hidden="true" className="text-lg leading-none">
        {enhanced ? "A" : "A"}
      </span>
      <span className="hidden sm:inline">
        {enhanced ? "Standard View" : "Accessibility"}
      </span>
    </button>
  );
}
