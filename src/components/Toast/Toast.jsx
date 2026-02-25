"use client";

import { useEffect, useState } from "react";
import { ChevronDown, X, Info } from "lucide-react";

export function InteractiveToast() {
  const INITIAL_TIME = 15;

  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(INITIAL_TIME);
  const [stopped, setStopped] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (!visible || stopped) return;

    if (count === 0) {
      setVisible(false);

      // Reset after hiding
      setTimeout(() => {
        setCount(INITIAL_TIME);
        setStopped(false);
        setExpanded(false);
        setVisible(true);
      }, 300);

      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, stopped, visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-6 right-6 w-[360px] rounded-2xl p-4 shadow-xl border transition-all duration-300
      bg-white border-neutral-200 text-neutral-900
      dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg">
            <Info size={18} />
          </div>
          <p className="font-medium">Update Available</p>
        </div>

        {/* Right Icons */}
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="transition-transform duration-300 hover:rotate-180"
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <button
            onClick={() => setVisible(false)}
            className="transition-transform duration-300 hover:rotate-12"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Expand Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          A new version is available with performance improvements and
          additional features.
        </p>

        <button
          onClick={() => setExpanded(false)}
          className="px-3 py-2 rounded-lg text-sm border
            border-neutral-300 dark:border-neutral-600
            hover:bg-neutral-100 dark:hover:bg-neutral-800
            transition"
        >
          Okay
        </button>
      </div>

      {/* Countdown */}
      {!stopped && (
        <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          The message will close in <span className="font-bold">{count}</span> seconds.{" "}
          <span
            onClick={() => setStopped(true)}
            className="underline font-medium cursor-pointer hover:text-black dark:hover:text-white transition"
          >
            click to stop
          </span>
        </div>
      )}
    </div>
  );
}
