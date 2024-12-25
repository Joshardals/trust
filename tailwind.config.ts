import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   black: "#1b1b1b",
      //   mint: "#3fe899",
      //   lightGray: "#f0f1f3",
      //   cadetGray: "#acb2bd",
      //   coolGray: "#717a86",
      // },
      colors: {
        charcoalGray: "#2d2d2d",
        seaGreen: "#2db67d",
        white: "#ffffff",
        slateGray: "#6b7280",
        darkSlateGray: "#4b5563",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
