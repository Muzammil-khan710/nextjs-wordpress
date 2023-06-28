const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    screens: {
      layoutsm: "432px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      layoutmd: "710px",
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      layoutlg:"1055px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      layout2xl: "1400px",
      layout3xl: "1440px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      dark: {
        100: "#333333",
        200: "#2B2B2B",
        300: "#1B1B1B",
        400: "#121212",
        500: "#202020"
      },
      grey: {
        100: "#F5F5F7",
        200: "#E5E5E5",
        300: "#939393",
        400: "#6E6E73",
        500: "#E8E8E8",
        600: "#414141",
      },
      white: "#fff",
      backwhite: "#1212128f",
      backdark: "#121212E0",
      blue:"#0066CC",
      blueDark:"#2997FF",
      greyBorder: "#E2E2E2",
      blueDarkTwo: "#4D8CC7"
    },
    extend: {
      fontFamily: {
        inter: ["var(--inter-font)", ...defaultTheme.fontFamily.sans],
        manrope: ["var(--manrope-font)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        light: "0px 8px 16px rgba(51, 51, 51, 0.04)",
        lightTwo: "0px 8px 24px rgba(51, 51, 51, 0.08)",
        lightThree:"0px 2px 8px rgba(51, 51, 51, 0.16)",
        svgLight:"0px 1.33333px 1.33333px rgba(51, 51, 51, 0.16)",
        dark: "0px 8px 16px rgba(0, 0, 0, 0.24)",
        darktwo: "0px 8px 16px rgba(0, 0, 0, 0.32)",
        svgDark: " 0px 1.33333px 1.33333px rgba(0, 0, 0, 0.56)",
        tableLight:"box-shadow: 0 0 0 1px rgba(226, 226, 226, 0)",
        tableDark:"box-shadow: 0 0 0 1px rgba(65,65,65,0)",
        btnShadow:" 0px 0px 16px rgba(0, 0, 0, 0.25)",
        btnShadowDark:" 0px 0px 16px rgba(0, 0, 0, 0.25)"
      },
      borderRadius: {
        "4xl": "1.875rem",
        input: "2rem",
      },
      fontWeight: {
        normal: 350,
        heading: 500,
        semibold: 600,
      },
      fontSize: {
        xs: [
          "0.875rem",
          {
            lineHeight: "1.4rem",
            fontWeight: 350,
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.6rem",
            fontWeight: 350,
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
            fontWeight: 350,
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.825rem",
            fontWeight: 350,
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "2.19rem",
            fontWeight: 350,
          },
        ],
        "h-one-big": [
          "2.5rem",
          {
            lineHeight: "3.4375rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],
        "h-one": [
          "2rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],
        "h-one-small": [
          "1.75rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],

        "h-two": [
          "1.5rem",
          {
            lineHeight: "2.06rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],
        "h-three": [
          "1.25rem",
          {
            lineHeight: "1.6875rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],
        "h-four": [
          "1.125rem",
          {
            lineHeight: "1.5625rem",
            fontWeight: "500",
            letterSpacing: "0.01em",
          },
        ],
        "h-five": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
            letterSpacing: "0.07em",
          },
        ],
      },
      // animation: {
      //   "spin-slow": "spin 5s linear infinite",
      // },
    },
  },

  plugins: [],
};
