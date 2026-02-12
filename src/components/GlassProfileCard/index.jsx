"use client";

import {
  BadgeCheck,
  Users,
  LayoutGrid,
  Plus,
} from "lucide-react";

export function GlassProfileCard({
  image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  name = "Sophie Bennett",
  description = "A Product Designer focused on intuitive user experiences.",
  followers = 312,
  posts = 48,
  verified = true,
}) {
  return (
    <div
      className="
      relative w-[340px] h-[430px] rounded-3xl overflow-hidden
      border-4 border-black/25 dark:border-white/20
      "
    >
      
      {/* Image */}
      <img
        src={image}
        alt={name}
        onError={(e) =>
          (e.currentTarget.src =
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330")
        }
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Global overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

      {/* Blur Panel */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        
        <div
          className="
          relative backdrop-blur-sm
          bg-white/5 dark:bg-black/30
          border-t border-white/20 dark:border-white/10
          p-6 overflow-hidden rounded-3xl
          "
        >
          <div className="relative z-10">

            {/* Name + Verified */}
            <div className="flex items-center gap-2">
              <h3 className="text-white text-xl font-semibold">
                {name}
              </h3>

              {verified && (
                <BadgeCheck
                  size={20}
                  className="text-emerald-400 fill-emerald-400/20"
                />
              )}
            </div>

            {/* Description */}
            <p className="text-white/80 dark:text-white/70 text-sm mt-2">
              {description}
            </p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-6">
              
              {/* Stats */}
              <div className="flex items-center gap-5 text-white/85 dark:text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{followers}</span>
                </div>

                <div className="flex items-center gap-2">
                  <LayoutGrid size={16} />
                  <span>{posts}</span>
                </div>
              </div>

              {/* Follow Button */}
              <button
                className="
                flex items-center gap-2 px-5 py-2 rounded-full
                bg-white text-black
                dark:bg-white dark:text-black
                text-sm font-medium shadow-lg
                hover:scale-105 transition duration-300
                "
              >
                Follow
                <Plus size={16} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
