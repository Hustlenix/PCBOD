import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f3f0e8",
        ink: "#111714",
        graphite: "#5b635e",
        line: "#c9cdc7",
        solder: "#103f32",
        pcb: "#1f6b50",
        signal: "#2b8a64",
        copper: "#a86f39",
        brass: "#c39458",
        cream: "#fffdf8"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        technical: "0 12px 32px rgba(17, 23, 20, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
