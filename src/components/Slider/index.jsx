"use client";

import React, { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ===========================
   CONTEXT
=========================== */
const SliderContext = createContext();

/* ===========================
   MAIN SLIDER
=========================== */
export function RelineSlider({ children }) {
  const [active, setActive] = useState(0);

  const items = React.Children.toArray(children).filter(
    (child) =>
      child.type?.displayName !== "RelineSliderPrev" &&
      child.type?.displayName !== "RelineSliderNext"
  );

  const prev = () =>
    setActive((p) => (p - 1 + items.length) % items.length);

  const next = () =>
    setActive((p) => (p + 1) % items.length);

  return (
    <SliderContext.Provider value={{ active, items, prev, next }}>
      <div className="relative w-full max-w-6xl mx-auto h-[520px] flex items-center justify-center overflow-hidden">

        {items.map((child, index) => {
          const position =
            index === active
              ? 0
              : index === (active + 1) % items.length
              ? 1
              : index === (active - 1 + items.length) % items.length
              ? -1
              : 2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                x:
                  position === 0
                    ? 0
                    : position === 1
                    ? 320
                    : position === -1
                    ? -320
                    : 0,
                scale: position === 0 ? 1 : 0.85,
                opacity: position === 0 ? 1 : 0.35,
                zIndex: position === 0 ? 30 : 10,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-[360px]"
            >
              {child}
            </motion.div>
          );
        })}

        {children}

      </div>
    </SliderContext.Provider>
  );
}

/* ===========================
   PREV BUTTON
=========================== */
export function RelineSliderPrev() {
  const { prev } = useContext(SliderContext);

  return (
    <button
      onClick={prev}
      className="absolute left-6 top-1/2 -translate-y-1/2 
      w-11 h-11 rounded-full bg-zinc-800/80 backdrop-blur 
      text-white flex items-center justify-center 
      hover:bg-zinc-700 transition-all z-40 shadow-lg"
    >
      <ChevronLeft size={20} />
    </button>
  );
}
RelineSliderPrev.displayName = "RelineSliderPrev";

/* ===========================
   NEXT BUTTON
=========================== */
export function RelineSliderNext() {
  const { next } = useContext(SliderContext);

  return (
    <button
      onClick={next}
      className="absolute right-6 top-1/2 -translate-y-1/2 
      w-11 h-11 rounded-full bg-zinc-800/80 backdrop-blur 
      text-white flex items-center justify-center 
      hover:bg-zinc-700 transition-all z-40 shadow-lg"
    >
      <ChevronRight size={20} />
    </button>
  );
}
RelineSliderNext.displayName = "RelineSliderNext";

/* ===========================
   CARD COMPONENT
=========================== */
export function RelineCard({
  image,
  subtitle,
  title,
  description,
  buttonText = "Explore",
}) {
  return (
    <div className="relative h-[480px] rounded-3xl overflow-hidden 
    bg-zinc-900 border-zinc-200 shadow-2xl border-3">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55  overflow-hidden rounded-3xl" />

      {/* Content */}
      <div className="absolute bottom-0 p-7 text-white space-y-3">
        <p className="text-xs uppercase tracking-widest text-zinc-400">
          {subtitle}
        </p>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-sm text-zinc-300 leading-relaxed">
          {description}
        </p>

        <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}


