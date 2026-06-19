/**
 * Muhammad Asif - Premium Portfolio
 * Global Theme Configuration System
 */

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  card: string;
  text: string;
  muted: string;
  border: string;
  textMuted: string;
  glow: string;
}

export interface ThemeConfig {
  dark: ThemeColors;
  light: ThemeColors;
}

export const themeConfig: ThemeConfig = {
  // Colors defined per user specification
  dark: {
    primary: "#2563EB",       // Blue
    secondary: "#7C3AED",     // Indigo-purple
    accent: "#06B6D4",        // Cyan
    background: "#0F172A",    // Deep slate
    card: "#1E293B",          // Mid slate
    text: "#F8FAFC",          // Light slate
    textMuted: "#94A3B8",     // Cool slate text
    muted: "#1E293B",         // Matching card or dark
    border: "#1E293B",        // Slate-800 border line matching Sophisticated Dark
    glow: "rgba(37, 99, 235, 0.15)", // Glow effect with primary blue color
  },
  light: {
    primary: "#2563EB",       // Blue
    secondary: "#7C3AED",     // Indigo-purple
    accent: "#06B6D4",        // Cyan
    background: "#F8FAFC",    // Soft, crisp light background
    card: "#FFFFFF",          // Pure white card
    text: "#0F172A",          // Dark slate text for high contrast
    textMuted: "#475569",     // Medium slate text
    muted: "#F1F5F9",         // Light gray slate
    border: "#E2E8F0",        // Soft border lines
    glow: "rgba(37, 99, 235, 0.08)", // Light blue glow
  }
};
