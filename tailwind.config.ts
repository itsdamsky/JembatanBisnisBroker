import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1B3D",
          900: "#0E2352",
          800: "#132C63",
          700: "#1B3B7F",
        },
        brand: {
          DEFAULT: "#123B87",
          light: "#2856B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1600px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 35, 82, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
