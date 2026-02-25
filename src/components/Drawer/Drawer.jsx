"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../utils/cn"

export function Drawer({
  open,
  onClose,
  children,
  direction = "right",
  className,
}) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose?.()
    }
    if (open) document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [open, onClose])

  const isHorizontal = direction === "left" || direction === "right"

  const sizeClasses = isHorizontal
    ? "w-full sm:w-1/2 lg:w-1/3 h-full"
    : "h-1/3 w-full"

  const positionClasses = {
    right: "right-0 top-0",
    left: "left-0 top-0",
    top: "top-0 left-0",
    bottom: "bottom-0 left-0",
  }

  const variants = {
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
    },
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" },
    },
    top: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" },
    },
    bottom: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
    },
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className={cn(
              "fixed z-50",
              sizeClasses,
              positionClasses[direction],
              "bg-neutral-50 dark:bg-neutral-900",
              "rounded-l-2xl dark:rounded-l-2xl",
              direction === "left" && "rounded-r-2xl rounded-l-none",
              direction === "top" && "rounded-b-2xl rounded-t-none",
              direction === "bottom" && "rounded-t-2xl rounded-b-none",
              "shadow-2xl dark:shadow-black/40",
              className
            )}
            variants={variants[direction]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
              delay: 0.15, // overlay appears first
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}