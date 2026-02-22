"use client";

import { createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { cn } from "../../utils/cn.js";

/* ---------------- Context ---------------- */

const CalloutContext = createContext(null);

/* ---------------- Styles ---------------- */

const baseStyle =
  "relative flex gap-3 w-fit border rounded-2xl px-4 py-3 text-sm leading-relaxed";

const variants = {
  default:
    "bg-[#FFFFFF] text-[#09090B] border-[#E4E4E7] dark:bg-[#09090B] dark:text-[#FFFFFF] dark:border-[#27272A]",

  info: "bg-[#F0F8FF] text-[#0973DC] border-[#D3E0FD] dark:bg-[#000D1F] dark:text-[#5896F3] dark:border-[#00113D]",

  destructive:
    "bg-[#FFF0F0] text-[#E60000] border-[#FFE0E1] dark:bg-[#2D0607] dark:text-[#FF9EA1] dark:border-[#4D0408]",

  warning:
    "bg-[#FFFCF0] text-[#DC7609] border-[#FDF5D3] dark:bg-[#1D1F00] dark:text-[#F3CF58] dark:border-[#3A3F00]",

  success:
    "bg-[#ECFDF3] text-[#008A2E] border-[#D3FDE5] dark:bg-[#001F0F] dark:text-[#59F3A6] dark:border-[#003D1C]",
};

/* ---------------- Root ---------------- */

function CalloutRoot({ variant = "default", className, children }) {
  return (
    <CalloutContext.Provider value={{ variant }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(baseStyle, variants[variant], className)}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </CalloutContext.Provider>
  );
}

/* ---------------- Icon ---------------- */

function CalloutIcon({ children }) {
  return <div className="mt-[2px] shrink-0 text-inherit">{children}</div>;
}

/* ---------------- Text ---------------- */

function CalloutText({ children }) {
  return (
    <div className="flex-1 [&_a]:underline [&_a]:underline-offset-2">
      {children}
    </div>
  );
}

/* ---------------- Export ---------------- */

export const Callout = {
  Root: CalloutRoot,
  Icon: CalloutIcon,
  Text: CalloutText,
};
