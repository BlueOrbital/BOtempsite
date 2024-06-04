import { DM_Sans } from "next/font/google";
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
      color1: {
        light: '#ffadad',
        DEFAULT: '#ff595e',
        dark: '#b5001e',
      },
      color2: {
        light: '#ffd6a5',
        DEFAULT: '#ffca3a',
        dark: '#b38a00',
      },
      color3: {
        light: '#caffbf',
        DEFAULT: '#8ac926',
        dark: '#598200',
      },
      color4: {
        light: '#9bf6ff',
        DEFAULT: '#1982c4',
        dark: '#004e78',
      },
      color5: {
        light: '#a0c4ff',
        DEFAULT: '#6a057f',
        dark: '#42004a',
      },
      color6: {
        light: '#bdb2ff',
        DEFAULT: '#9b5de5',
        dark: '#6b00b6',
      },
      color7: {
        light: '#ffc6ff',
        DEFAULT: '#ff61a6',
        dark: '#b60052',
      },
      color8: {
        light: '#fffffc',
        DEFAULT: '#808080',
        dark: '#404040',
      },
      color9: {
        light: '#a7f3d0',
        DEFAULT: '#047857',
        dark: '#064e3b',
      },
      color10: {
        light: '#d1fae5',
        DEFAULT: '#10b981',
        dark: '#065f46',
      },
    },
    fontFamily: {
      kumbh: ["Kumbh_Sans", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      dm: ["DM_Sans", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
      ubuntu: ["Ubuntu_Sans_Mono", "sans-serif"],
      kode: ["Kode_Mono", "sans_serif"],
      ojuju: ["Ojuju", "sans_serif"],
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
      lineHeight: {
        "title": "1",
        "sub-title": "1",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "typing": "typing 1.5s steps(40, end)",
        "blink-caret": "blink-caret .75s step-end infinite",
        "fade-in": "fade-in 1.5s ease-in",
        "fade-out": "fade-out 1.5s ease-in",
      },
      transitionDuration: {
        "1250": "1250ms",
        "1500": "1500ms",
        "1750": "1750ms",
        "2000": "2000ms",
        "2500": "2500ms",
      },
      from: {
        "custom": "rgb(x,y,z)"
      }
    },
  },
  plugins: [],
};
export default config;
