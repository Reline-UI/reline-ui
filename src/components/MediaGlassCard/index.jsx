"use client";

import { cn } from "../../utils/cn.js";

export function MediaBlurCard({
  mediaSrc,
  mediaType = "video",
  title,
  subtitle,
  avatar,
  href,
  actions,
  className,
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={cn(
        "group relative block w-full max-w-sm overflow-hidden rounded-2xl",
        "border border-white/10",
        "transition-all hover:-translate-y-0.5 hover:shadow-xl overflow-hidden",
        className,
      )}
    >
      {/* Media (same aspect as MediaCard) */}
      <div className="relative aspect-[16/10]">
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={title || "Media preview"}
            className="h-full w-full object-cover"
          />
        )}

        {/* subtle global darkening */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        {/* Blur scrim behind content */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0 h-[45%]
            backdrop-blur-xl
            bg-black/35
            [mask-image:linear-gradient(to_top,black,transparent)]
          "
        />

        {/* Content (same structure as MediaCard) */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-3 min-w-0">
            {avatar && (
              <img
                src={avatar}
                alt={title || "Avatar"}
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-white/20"
              />
            )}

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-medium text-white">{title}</p>
              {subtitle && (
                <p className="truncate text-xs text-white/70">{subtitle}</p>
              )}
            </div>
          </div>

          {actions && <div className="shrink-0 text-white">{actions}</div>}
        </div>
      </div>
    </Wrapper>
  );
}
