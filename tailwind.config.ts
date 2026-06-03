import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F5EF",        // hero background
        ink: "#243600",           // headline green-black
        muted: "#656565",         // subtitle grey
        highlight: "#D3FBA2",     // lime highlight behind "collaborator."
        // UNO card palette (pulled from the +4 outline swatches in the spec)
        uno: {
          green: "#27AE60",
          red: "#EB5757",
          yellow: "#F2C94C",
          blue: "#2F80ED",
          black: "#26262B",
          face: "#F2F2F2",
        },
        pink: {
          base: "#FDB9EA",
          deep: "#FF59D1",
          text: "#5E0044",
        },
      },
      fontFamily: {
        // display headline
        cal: ["var(--font-cal-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        // body / subtitle / button
        tight: ["var(--font-inter-tight)", "ui-sans-serif", "sans-serif"],
        // logo wordmark
        francois: ["var(--font-francois-one)", "sans-serif"],
        // card numerals (slashed zero)
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "7%",
        pill: "100px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-8px) rotate(3deg)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
