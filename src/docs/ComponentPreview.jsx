"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MarkdownRenderer from "./MarkdownRenderer";

export default function ComponentPreview({ title, docs, children }) {
  const [tab, setTab] = useState("preview");

  return (
    <section className="w-full flex justify-center py-12">
      <div
        className="
          w-full max-w-5xl
          rounded-2xl
          border border-zinc-200 dark:border-zinc-800
          bg-white dark:bg-zinc-900
          shadow-sm
          p-6
        "
      >
        {/* Header */}
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>

          <div className="flex rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1">
            <TabButton
              active={tab === "preview"}
              onClick={() => setTab("preview")}
            >
              Preview
            </TabButton>

            <TabButton
              active={tab === "docs"}
              onClick={() => setTab("docs")}
            >
              Docs
            </TabButton>
          </div>
        </header>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {tab === "preview" && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                  min-h-[220px]
                  rounded-xl
                  bg-zinc-50 dark:bg-zinc-950
                  p-6
                  overflow-x-auto
                "
              >
                {children}
              </motion.div>
            )}

            {tab === "docs" && (
              <motion.div
                key="docs"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="prose dark:prose-invert max-w-none"
              >
                <MarkdownRenderer src={docs} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Tab Button
---------------------------------------------- */

function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`
        px-3 py-1.5 text-sm rounded-md transition-all
        ${
          active
            ? "bg-white dark:bg-zinc-900 shadow text-zinc-900 dark:text-white"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}
