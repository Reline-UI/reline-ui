"use client";

import { motion } from "framer-motion";

/* ---------------------------------- */
/* Default Reline SVG Mark            */
/* ---------------------------------- */

function DefaultRelineMark() {
  return (
    <motion.path
      d="M10 80 Q 95 10 180 80 T 350 80"
      stroke="currentColor"
      strokeWidth="4"
      fill="currentColor"
      initial={{ pathLength: 0, fillOpacity: 0 }}
      animate={{
        pathLength: [0, 1, 1, 0],
        fillOpacity: [0, 0, 0.15, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}

/* ---------------------------------- */
/* Reline Loader Component            */
/* ---------------------------------- */

export function Loader({
  size = 200,
  strokeWidth = 5,
  color = "currentColor",
  svgPath, // optional custom path
  className,
}) {
  return (
    <div className={className}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 360 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgPath ? (
          <motion.path
            d={svgPath}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              fillOpacity: [0, 0, 0.15, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ) : (
          <DefaultRelineMark />
        )}
      </motion.svg>
    </div>
  );
}
