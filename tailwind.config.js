const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mon: ['var(--font-mon)', ...fontFamily.sans],
      },
      backgroundColor: {
        dark: "#0a0a0f",
        light: "#ffffff",
        sidebar: {
          dark: "#14141f",
          light: "#f0f0f5",
          top: {
            dark: "#0a0a0f",
            light: "#d1d1e0"
          }
        },
        button: {
          dark: "#29293d",
          light: "#5c5c8a",
          hover: {
            dark: "#33334d",
            light: "#52527a"
          },
          seller: "#00cc7a",
          logout: "#cc0000",
          filter: {
            dark: "#29293d",
            light: "#e0e0eb",
            active: {
              dark: "#14141f",
              light: "#c2c2d6"
            }
          }
        },
        input: {
          dark: "#14141f",
          light: "#f0f0f5"
        },
        card: {
          dark: "#14141f",
          light: "#f0f0f5"
        },
      },
      colors: {
        dark: "#e0e0eb",
        light: "#1f1f2e"
      }
    },
    screens: {
      "5xl": { max: "1040px" },
      "4xl": { max: "1020px" },
      "3xl": { max: "920px" },
      "2xl": { max: "820px" },
      xl: { max: "720px" },
      lg: { max: "620px" },
      md: { max: "520px" },
      sm: { max: "420px" },
      xs: { max: "320px" }
    }
  },
  plugins: [],
}
