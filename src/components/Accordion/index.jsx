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
    throw new Error("Accordion components must be inside Accordion");
  }
  return ctx;
}

/* -------------------------------------------------
   Accordion Root
-------------------------------------------------- */

export default function Accordion({ children, className = "" }) {
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
   Accordion Item
-------------------------------------------------- */

export function AccordionItem({ id, children }) {
  return (
    <div
      data-id={id}
      className="
        rounded-2xl
        border border-black/10 dark:border-white/10
        bg-[#FAFAFA] dark:bg-[#18181B]
        text-[#18181B] dark:text-[#FAFAFA]
        shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
      "
    >
      {/* Shared width wrapper */}
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

/* -------------------------------------------------
   Accordion Trigger
-------------------------------------------------- */

export function AccordionTrigger({ id, children }) {
  const { openId, toggle } = useAccordion();
  const isOpen = openId === id;

  return (
    <button
      onClick={() => toggle(id)}
      className="
      min-w-lg
        
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
        <ChevronUp className="h-5 w-5 shrink-0" />
      ) : (
        <ChevronDown className="h-5 w-5 shrink-0" />
      )}
    </button>
  );
}

/* -------------------------------------------------
   Accordion Content
-------------------------------------------------- */

export function AccordionContent({ id, children }) {
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

/* -------------------------------------------------
   Example Usage
-------------------------------------------------- */

// export default function AccordionDemo() {
//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-6">
//       <Accordion className="w-full max-w-xl">
//         <AccordionItem id="accordion-1">
//           <AccordionTrigger id="accordion-1">Accordion</AccordionTrigger>
//           <AccordionContent id="accordion-1">
//             An accordion is a UI component that lets users expand or collapse
//             content sections. It helps reduce clutter while keeping information
//             easily accessible.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }
