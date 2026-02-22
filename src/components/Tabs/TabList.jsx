"use client";

import { cn } from "../../utils/cn.js";

export function TabList({ children, className }) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1 p-1 rounded-2xl",
        "bg-[#F4F4F5] dark:bg-[#27272A]",
        className,
      )}
    >
      {children}
    </div>
  );
}
