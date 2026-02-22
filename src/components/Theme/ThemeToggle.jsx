import { useRelineTheme } from "./RelineThemeProvider";
import { cn } from "../../utils/cn.js";

export function ThemeToggle() {
  const { theme, setTheme } = useRelineTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative inline-flex h-7 w-14 items-center rounded-full
        border border-zinc-200 dark:border-zinc-700
        bg-zinc-100 dark:bg-zinc-800
        transition-colors duration-300
        focus:outline-none
      "
      aria-label="Toggle theme"
    >
      {/* Thumb */}
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full
          bg-white dark:bg-zinc-900
          shadow-sm
          transition-transform duration-300
          ${isDark ? "translate-x-7" : "translate-x-1"}
        `}
      />

      {/* Text */}
      <span className="sr-only">{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
