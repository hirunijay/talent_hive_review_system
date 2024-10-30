import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeblue: {
          dark: "#2228C3",
          light: "#C6C7EC",
        },
        themegray: {
          dark: "#32383E",
          default: "#AAAAAA",
          light: "#EEEEEE",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
