"use client"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function BlurStaggeredText({
  text,
  className,
  delay = 0.2,
  duration = 0.6,
  stagger = 0.06,
  blur = 10,
  y = 20,
  type = "word",
  once = false, // default false so it re-runs
  amount = 0.3, // control when it triggers
}) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: y,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const splitText =
    type === "word"
      ? text.split(" ")
      : text.split("")

  return (
    <motion.div
      className={cn("inline-block overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block will-change-transform"
        >
          {item}
          {type === "word" && index !== splitText.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  )
}