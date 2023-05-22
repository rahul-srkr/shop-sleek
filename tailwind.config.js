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
      backgroundColor: {
        dark: "#0a0a0f",
        light: "#ffffff",
        button: {
          dark: "#29293d",
          light: "#5c5c8a",
          hover: {
            dark: "#33334d",
            light: "#52527a"
          }
        },
        input: {
          dark: "#14141f",
          light: "#f0f0f5"
        },
        card: {
          dark: "#14141f",
          light: "#f0f0f5"
        }
      },
      colors: {
        dark: "#f0f0f5",
        light: "#0a0a0f"
      }
    },
    screens: {
      xl: { max: "950px" },
      lg: { max: "874px" },
      md: { max: "600px" },
      sm: { max: "510px" },
      xs: { max: "320px" }
    }
  },
  plugins: [],
}
