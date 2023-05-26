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
        initial: {
          dark: "#000000",
          light: "#ffffff",
        },
        primary: {
          light: "#e0e0eb",
          dark: "#14141f"
        },
        secondary: {
          light: "#c1c1d7",
          dark: "#28283e"
        },
        tertiary: {
          light: "#a2a2c3",
          dark: "#3c3c5d"
        },
        quaternary: {

        },
        aubsequent: {

        },
        ancillary: {

        },
        button: {
          initial: {
            dark: "#29293d",
            light: "#5c5c8a",
            hover: {
              light: "#47476b",
              dark: "#1f1f2e"
            }
          },
          primary: {
            dark: "#29293d",
            light: "#00b36b",
            hover: {
              light: "#00804d",
              dark: "#1f1f2e"
            }
          },
          secondary: {
            light: "#ff0066",
            dark: "#29293d",
            hover: {
              light: "#cc0052",
              dark: "#1f1f2e"
            }
          },
          tertiary: {
            light: "#009933",
            dark: "#29293d",
            hover: {
              light: "#006622",
              dark: "#1f1f2e"
            }
          },
          danger: {
            color: "#cc0000",
            hover: "#990000"
          },
        },
        input: {
          dark: "#1f1f2e",
          light: "#f0f0f5"
        },
      },
      textColor: {
        initial: {
          dark: "#f2f2f2",
          light: "#0d0d0d"
        },
        primary: {
          dark: "#a6a6a6",
          light: "#595959"
        },
        secondary: {
          light: "#a6a6a6",
          dark: "#595959"
        },
      },
      boxShadow: {
        sort: " 0px -127px 5px -3px rgba(0,0,0,0.59)"
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
