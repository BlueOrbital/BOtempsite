import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      deepGrey: "#141A1F",
      darkGrey: "#242F38",
      midGrey: "#88A0B5",
      lightGrey: "#B0C0CF",
      deepBlue: "#081521",
      darkBlue: "#0D2336",
      midBlue: "#1C374F",
      lightBlue: "#BFE1FF",
      darkGreyBlue: "#2F4E69",
      midGreyBlue: "#486782",
      lightGreyBlue: "#C5D8E8",
    },
    fontFamily: {
      main: ["Kumbh_Sans", "sans-serif"],
      secondary: ["Orbitron", "sans-serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      fontSize: {
        "title": "4rem",
        "sub-title": "2.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "typing": "typing 1.5s steps(40, end)",
        "blink-caret": "blink-caret .75s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
