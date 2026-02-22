export const THEME_KEY = "reline-theme";

export function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;

  root.classList.remove("dark");

  if (theme === "dark") {
    root.classList.add("dark");
  }

  if (theme === "system") {
    if (getSystemTheme() === "dark") {
      root.classList.add("dark");
    }
  }
}

export function getStoredTheme() {
  if (typeof window === "undefined") return "system";
  return localStorage.getItem(THEME_KEY) || "system";
}

export function setStoredTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}
