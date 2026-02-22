"use client";

import { cn } from "../../utils/cn.js";

export function MediaCard({
  mediaSrc = "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4",
  mediaType = "video",
  title,
  subtitle,
  description,
  avatar = "https://x.com/pauldebajoyti/photo",
  href,
  actions,
  className,
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={cn(
        "group block w-full max-w-sm overflow-hidden rounded-2xl",
        "border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        "transition-all hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {/* ---------------- Media ---------------- */}
      <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-800">
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="flex flex-col gap-3 p-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {avatar && (
              <img
                src={avatar}
                alt={title || "Avatar"}
                className="h-9 w-9 shrink-0 rounded-full object-cover"
              />
            )}

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {title}
              </p>

              {subtitle && (
                <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* 👉 Action beside name (hidden on small screens) */}
          {actions && <div className="hidden sm:block shrink-0">{actions}</div>}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {description}
          </p>
        )}

        {/* 👉 Same action below description (only on small screens) */}
        {actions && <div className="sm:hidden w-full">{actions}</div>}
      </div>
    </Wrapper>
  );
}
