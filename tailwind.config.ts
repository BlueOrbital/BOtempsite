import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      deepGrey: '#141A1F',
      darkGrey: '#242F38',
      midGrey: '#88A0B5',
      lightGrey: '#B0C0CF',
      deepBlue: '#081521',
      darkBlue: '#0D2336',
      midBlue: '#1C374F',
      lightBlue: '#BFE1FF',
      darkGreyBlue: '#2F4E69',
      midGreyBlue: '#486782',
      lightGreyBlue: '#C5D8E8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }
  },
  plugins: [],
};
export default config;
