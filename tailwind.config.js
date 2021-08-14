module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        black: "#121212",
        ghost: {
          10: "rgba(10, 10, 10, 0.1)",
          20: "rgba(10, 10, 10, 0.2)",
          30: "rgba(10, 10, 10, 0.3)",
          40: "rgba(10, 10, 10, 0.4)",
          50: "rgba(10, 10, 10, 0.5)",
          60: "rgba(10, 10, 10, 0.6)",
          70: "rgba(10, 10, 10, 0.7)",
          80: "rgba(10, 10, 10, 0.8)",
          90: "rgba(10, 10, 10, 0.9)",
          100: "rgba(10, 10, 10, 1)",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        yellow: "#f5df4d",
        purple: "#8b4df5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
