"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "../../utils/cn"

/* ----------------------------- */
/* Main Component                */
/* ----------------------------- */
    export function RelineBentoGrid({ items = [], className }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-6">
  {items.map((item, index) => (
    <BentoCard
      key={index}
      className={cn(
        "hover:rotate-2",
        item.large && "md:col-span-2"
      )}
    >
      <CardContent
        title={item.title}
        description={item.description}
      />
    </BentoCard>
  ))}
</div>  
    )
    }

/* ----------------------------- */
/* Bento Card                    */
/* ----------------------------- */
function BentoCard({ children, className }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500",
        "bg-white border-zinc-200",
        "dark:bg-zinc-900 dark:border-zinc-800",
        className
      )}
      style={
        hovered
          ? {
              boxShadow:
                "0 0 0 1px rgba(113,113,122,0.6), 0 0 20px rgba(113,113,122,0.25)"
            }
          : {}
      }
    >
      {/* Subtle moving light sweep */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl overflow-hidden",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-blue-300 to-transparent dark:via-blue-100  animate-border-sweep" />
      </div>

      <div className="relative h-full p-8 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  )
}
/* ----------------------------- */
/* Card Content                  */
/* ----------------------------- */
function CardContent({ title, description, className }) {
  return (
    <div className={cn("flex flex-col gap-3 ", className)}>

      <motion.h3
        initial={{ y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="text-lg font-medium tracking-tight"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
      >
        {description}
      </motion.p>

    </div>
  )
}   
