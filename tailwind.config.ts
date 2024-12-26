import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        seaGreen: "#0052FF",
        charcoalGray: "#000000",
        slateGray: "#777E90",
        darkSlateGray: "#353945",
        lightGray: "#F4F5F6",
        positiveGreen: "#58BD7D",
        negativeRed: "#FF6838",
        btcOrange: "#F7931A",
        ethBlue: "#627EEA",
        bnbYellow: "#F3BA2F",

        // New Colors
        softWhite: "#f5f4f7",
        blueSteel: "#929aa8",
        electricBlue: "#0200fb",
        charcoalBlue: "#21242f",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
