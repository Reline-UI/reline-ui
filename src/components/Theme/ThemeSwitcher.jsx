"use client";

export function ThemeSwitcher({ theme, setTheme }) {
  const buttonBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition-colors";

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#F4F4F5] dark:bg-[#27272A]">
      <button
        onClick={() => setTheme("light")}
        className={`${buttonBase} ${
          theme === "light"
            ? "bg-white text-[#09090B]"
            : "text-[#71717A] dark:text-[#A1A1AA]"
        }`}
      >
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`${buttonBase} ${
          theme === "dark"
            ? "bg-white dark:bg-[#09090B] text-[#09090B] dark:text-[#F7F8F8]"
            : "text-[#71717A] dark:text-[#A1A1AA]"
        }`}
      >
        Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`${buttonBase} ${
          theme === "system"
            ? "bg-white dark:bg-[#09090B] text-[#09090B] dark:text-[#F7F8F8]"
            : "text-[#71717A] dark:text-[#A1A1AA]"
        }`}
      >
        System
      </button>
    </div>
  );
}
