import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function RelineThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useRelineTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useRelineTheme must be used inside RelineThemeProvider"
    );
  }

  return context;
}
