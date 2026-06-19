import React, { createContext, useContext, useState, useEffect } from "react";
import { themeConfig, ThemeColors } from "./theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load configured preference, fallback to dark by default as per req (Background: #0F172A)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return (saved as ThemeMode) || "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const currentColors = theme === "dark" ? themeConfig.dark : themeConfig.light;

  useEffect(() => {
    // Save preference
    localStorage.setItem("portfolio-theme", theme);

    const root = document.documentElement;

    // Remove old classes
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Apply colors as dynamic CSS properties
    root.style.setProperty("--primary", currentColors.primary);
    root.style.setProperty("--secondary", currentColors.secondary);
    root.style.setProperty("--accent", currentColors.accent);
    root.style.setProperty("--background", currentColors.background);
    root.style.setProperty("--card", currentColors.card);
    root.style.setProperty("--text", currentColors.text);
    root.style.setProperty("--text-muted", currentColors.textMuted);
    root.style.setProperty("--muted", currentColors.muted);
    root.style.setProperty("--border", currentColors.border);
    root.style.setProperty("--glow", currentColors.glow);

  }, [theme, currentColors]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
