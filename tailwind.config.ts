import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--color-page) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
          subtle: "rgb(var(--color-accent-subtle) / <alpha-value>)",
          fill: "rgb(var(--color-accent-fill) / <alpha-value>)",
          text: "rgb(var(--color-accent-text) / <alpha-value>)",
        },
        tag: {
          "frontend-bg": "rgb(var(--color-tag-frontend-bg) / <alpha-value>)",
          "frontend-text": "rgb(var(--color-tag-frontend-text) / <alpha-value>)",
          "backend-bg": "rgb(var(--color-tag-backend-bg) / <alpha-value>)",
          "backend-text": "rgb(var(--color-tag-backend-text) / <alpha-value>)",
          "devops-bg": "rgb(var(--color-tag-devops-bg) / <alpha-value>)",
          "devops-text": "rgb(var(--color-tag-devops-text) / <alpha-value>)",
          "neutral-bg": "rgb(var(--color-tag-neutral-bg) / <alpha-value>)",
          "neutral-text": "rgb(var(--color-tag-neutral-text) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(var(--color-shadow) / 0.06)",
        DEFAULT: "0 1px 3px 0 rgb(var(--color-shadow) / 0.08), 0 1px 2px -1px rgb(var(--color-shadow) / 0.08)",
        md: "0 4px 6px -1px rgb(var(--color-shadow) / 0.08), 0 2px 4px -2px rgb(var(--color-shadow) / 0.08)",
        lg: "0 10px 15px -3px rgb(var(--color-shadow) / 0.08), 0 4px 6px -4px rgb(var(--color-shadow) / 0.08)",
        xl: "0 20px 25px -5px rgb(var(--color-shadow) / 0.08), 0 8px 10px -6px rgb(var(--color-shadow) / 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
