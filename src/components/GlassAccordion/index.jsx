"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../utils/cn.js";

/* -------------------------------------------------
   Context
-------------------------------------------------- */

const AccordionContext = createContext(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("GlassAccordion components must be inside GlassAccordion");
  }
  return ctx;
}

/* -------------------------------------------------
   GlassAccordion Root
-------------------------------------------------- */

export default function GlassAccordion({ children, className }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

/* -------------------------------------------------
   GlassAccordion Item
-------------------------------------------------- */

export function GlassAccordionItem({ id, children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      data-id={id}
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer",
        "text-zinc-800 dark:text-white",
        className,
      )}
    >
      {/* Blur / texture layer */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.01)]" />

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_1px_1px_2px_rgba(255,255,255,0.35)]" />

      <div className="relative px-6 py-5">{children}</div>
    </motion.div>
  );
}

/* -------------------------------------------------
   GlassAccordion Trigger
-------------------------------------------------- */

export function GlassAccordionTrigger({ id, children, className }) {
  const { openId, toggle } = useAccordion();
  const isOpen = openId === id;

  return (
    <button
      onClick={() => toggle(id)}
      className={cn(
        "w-full flex items-center justify-between text-left",
        "text-lg font-semibold focus:outline-none",
        className,
      )}
    >
      <span>{children}</span>

      {isOpen ? (
        <ChevronUp className="h-5 w-5 shrink-0 opacity-80" />
      ) : (
        <ChevronDown className="h-5 w-5 shrink-0 opacity-80" />
      )}
    </button>
  );
}

/* -------------------------------------------------
   GlassAccordion Content
-------------------------------------------------- */

export function GlassAccordionContent({ id, children, className }) {
  const { openId } = useAccordion();
  const isOpen = openId === id;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn("overflow-hidden", className)}
        >
          <div className="pt-4 text-sm leading-relaxed opacity-90">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
