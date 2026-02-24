"use client"

import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function StaggeredText({
  text,
  className,
  delay = 0,
  duration = 0.2,
  stagger = 0.05,
  type = "word",
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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
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
      viewport={{ once: false, amount: 0.3 }}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {item}
          {type === "word" && index !== splitText.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  )
}