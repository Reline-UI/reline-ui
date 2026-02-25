"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {cn} from "../../utils/cn"

/* ---------------------------------- */
/* Dropdown Root                      */
/* ---------------------------------- */

export function Dropdown({ label, children, className }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  return (
    <div
      className={cn("relative inline-block text-left", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300",
          "bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
          "dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        )}
      >
        {label}
      </button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute mt-2 w-56 rounded-xl border p-2 shadow-xl backdrop-blur-xl",
              "bg-white border-neutral-200",
              "dark:bg-neutral-900 dark:border-neutral-800"
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------------------------- */
/* Dropdown Item                      */
/* ---------------------------------- */

export function DropdownItem({
  children,
  icon: Icon,
  href,
  onClick,
  color = "neutral", 
  className,
}) {
  const Component = href ? "a" : "button"

  const colorStyles = {
    neutral: {
      text: "text-neutral-700 dark:text-neutral-300",
      icon: "text-neutral-500 dark:text-neutral-400",
      bg: "bg-neutral-100 dark:bg-neutral-800",
    },
    danger: {
      text: "text-red-600 dark:text-red-400",
      icon: "text-red-500 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/30",
    },
  }

  const styles = colorStyles[color] || colorStyles.neutral

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center gap-3 px-3 py-2 rounded-lg overflow-hidden",
        "text-sm font-medium transition-colors duration-200",
        styles.text,
        className
      )}
    >
      {/* Subtle Background Hover Effect */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
          styles.bg,
          "group-hover:opacity-100"
        )}
      />

      {/* Icon */}
      {Icon && (
        <Icon
          className={cn(
            "relative z-10 h-4 w-4 transition-colors duration-200",
            styles.icon
          )}
        />
      )}

      {/* Text Slide Animation */}
      <span className="relative z-10 overflow-hidden h-5">
        <span className="block transition-transform duration-300 group-hover:-translate-y-5">
          {children}
        </span>
        <span className="block absolute left-0 top-5 transition-transform duration-300 group-hover:-translate-y-5">
          {children}
        </span>
      </span>
    </Component>
  )
}