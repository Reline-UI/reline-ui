"use client";

import { cn } from "../../utils/cn";

export function SlideText({
  text,
  className,
  hover = true, // allows disabling animation if needed
}) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden leading-[130%]",
        "h-[1.25em]", // keeps height stable
        "h-[1.30em]", // keeps height stable
        hover && "group",
        className,
      )}
    >
      {/* Top Text */}
      <span
        className={cn(
          "block transition-transform duration-300 ease-out",
          hover && "group-hover:-translate-y-full",
        )}
      >
        {text}
      </span>

      {/* Bottom Text */}
      <span
        className={cn(
          "absolute left-0 top-full block transition-transform duration-300 ease-out",
          hover && "group-hover:-translate-y-full",
        )}
      >
        {text}
      </span>
    </span>
  );
}
