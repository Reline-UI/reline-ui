"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export function ExpandablePanels({
  count = 5,
  images = [],
  titles = [],
  descriptions = [],
  buttonTexts = [],
  className = "",
  panelClassName = "",
}) {
  const [active, setActive] = useState(null);

  const defaultImages = [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  ];

  return (
    <div
      className={cn(
        "flex h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-950",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const image = images[i] || defaultImages[i % defaultImages.length];
        const title = titles[i] || `Panel ${i + 1}`;
        const description =
          descriptions[i] ||
          "Premium expandable content section for modern UI systems.";
        const buttonText = buttonTexts[i] || "Explore";

        const isActive = active === i;

        return (
          <motion.div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            animate={{ flex: isActive ? 3 : 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className={cn(
              "relative cursor-pointer overflow-hidden bg-neutral-900 border-r border-neutral-800",
              panelClassName
            )}
          >
            {/* Premium Image Reveal (Only When Active) */}
            <AnimatePresence>
              {isActive && (
                <motion.img
                  key="image"
                  src={image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </AnimatePresence>

            {/* Gradient Overlay (Only When Active) */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                />
              )}
            </AnimatePresence>

            {/* Collapsed Vertical Title */}
            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rotate-[-90deg] text-xs tracking-[0.3em] uppercase text-neutral-400">
                  {title}
                </span>
              </div>
            )}

            {/* Expanded Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="absolute bottom-0 p-8 text-white"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl font-semibold"
                  >
                    {title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-4 text-sm max-w-xs text-neutral-200"
                  >
                    {description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 rounded-md bg-white px-5 py-2 text-sm font-medium text-black"
                  >
                    {buttonText}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}