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
    throw new Error("Accordion components must be inside Accordion");
  }
  return ctx;
}

/* -------------------------------------------------
   Accordion Root
-------------------------------------------------- */

export default function Accordion({ children, className }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={cn("flex flex-col gap-4 w-full", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

/* -------------------------------------------------
   Accordion Item
-------------------------------------------------- */

export function AccordionItem({ id, children, className }) {
  return (
    <div
      data-id={id}
      className={cn(
        `
        rounded-2xl
        border border-black/10 dark:border-white/10
        bg-[#FAFAFA] dark:bg-[#18181B]
        text-[#18181B] dark:text-[#FAFAFA]
        shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]
        `,
        className,
      )}
    >
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

/* -------------------------------------------------
   Accordion Trigger
-------------------------------------------------- */

export function AccordionTrigger({ id, children, className }) {
  const { openId, toggle } = useAccordion();
  const isOpen = openId === id;

  return (
    <button
      onClick={() => toggle(id)}
      className={cn(
        `
        w-full
        flex items-center justify-between
        text-left
        text-lg font-semibold
        focus:outline-none
        transition-colors
        `,
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
   Accordion Content
-------------------------------------------------- */

export function AccordionContent({ id, children, className }) {
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
          <div
            className={cn("pt-4 text-sm leading-relaxed opacity-90", className)}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
