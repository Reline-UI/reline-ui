"use client";

import { motion } from "framer-motion";
import { useTabs } from "./TabContext";
import { cn } from "../../utils/cn.js";

export function Tab({ value: tabValue, children, className }) {
  const { value, setValue } = useTabs();
  const isActive = value === tabValue;

  return (
    <button
      onClick={() => setValue(tabValue)}
      className={cn(
        "relative z-10 px-4 py-2 rounded-xl text-sm font-medium",
        "transition-colors duration-200 ease-out",
        !isActive &&
          "text-[#71717A] hover:text-[#09090B] hover:bg-[#F4F4F5] \
           dark:text-[#A1A1AA] dark:hover:text-[#F7F8F8] dark:hover:bg-[#18181B]",
        className,
      )}
    >
      {isActive && (
        <motion.div
          layoutId="reline-tab-indicator"
          className={cn(
            "absolute inset-0 rounded-xl -z-10",
            "bg-[#FFFFFF] dark:bg-[#09090B]",
            "shadow-sm dark:shadow-none",
          )}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.35,
          }}
        />
      )}

      <span
        className={cn(
          "relative",
          isActive ? "text-[#09090B] dark:text-[#F7F8F8]" : "text-inherit",
        )}
      >
        {children}
      </span>
    </button>
  );
}
