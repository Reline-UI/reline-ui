"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";

export function TooltipAvatar({ image, name, designation, className }) {
  const [isHover, setIsHover] = useState(false);

  /* ---------------- Default Handling ---------------- */

  const defaultImage =
    image ||
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80";

  const defaultName = name || "Reline User";
  const defaultDesignation = designation || "UI Contributor";

  return (
    <div
      className={cn("relative inline-flex flex-col items-center", className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Avatar */}
      <motion.img
        src={defaultImage}
        alt={defaultName}
        initial={{ borderRadius: 9999 }}
        animate={{
          borderRadius: isHover ? 18 : 9999,
          scale: isHover ? 1.08 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="w-16 h-16 object-cover border-2 
                   dark:border-[#E4E4E7] 
                   border-[#27272A]/30
                   "
      />

      {/* Tooltip */}
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0, y: 14, rotate: -6 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, -6, 6, -4, 4, -2, 2, 0], // stronger wobble
            }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 px-4 py-2 text-sm rounded-xl border-2
                       bg-[#FFFFFF] text-[#09090B] border-[#E4E4E7]
                       dark:bg-[#09090B] dark:text-[#FFFFFF] dark:border-[#27272A]
                       shadow-xl whitespace-nowrap"
          >
            <div className="font-medium">{defaultName}</div>
            <div className="text-xs opacity-70">{defaultDesignation}</div>

            {/* Tooltip Arrow */}
            <div
              className="absolute left-1/2 -bottom-2 -translate-x-1/2 
                         w-3 h-3 rotate-45 border-r-2 border-b-2
                         bg-[#FFFFFF] border-[#E4E4E7]
                         dark:bg-[#09090B] dark:border-[#27272A]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
