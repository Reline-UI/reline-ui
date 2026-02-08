"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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

export default function GlassAccordion({ children, className = "" }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
}

/* -------------------------------------------------
   GlassAccordion Item (Glass style)
-------------------------------------------------- */

export function GlassAccordionItem({ id, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      data-id={id}
      className="
        relative
        rounded-2xl
        overflow-hidden
        cursor-pointer
        dark:text-white
        text-zinc-800
      "
    >
      {/* Texture/Blur Layer */}
      <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.01)] h-fit  w-fit" />
      {/* Inner Shadow Effect */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_0px_rgba(255,255,255,0.1),inset_1px_1px_2px_0px_rgba(255,255,255,0.35)]" />

      {/* Shared width wrapper */}
      <div className="relative px-6 py-5">{children}</div>
    </motion.div>
  );
}

/* -------------------------------------------------
   GlassAccordion Trigger
-------------------------------------------------- */

export function GlassAccordionTrigger({ id, children }) {
  const { openId, toggle } = useAccordion();
  const isOpen = openId === id;

  return (
    <button
      onClick={() => toggle(id)}
      className="
      
        w-full
        flex
        items-center
        justify-between
        text-left
        text-lg
        font-semibold
        focus:outline-none
        
      "
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

export function GlassAccordionContent({ id, children }) {
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
          className="overflow-hidden"
        >
          <div className="pt-4 text-sm leading-relaxed opacity-90">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
