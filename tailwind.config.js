/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tz-red": "#a20d12",
        "tz-red-text": "#f04248",
        "tz-border": "#35393b",
        "tz-border-hover": "#4c5255",
        "tz-red-hover": "#ca1016",
        "tz-red-hover-dark": "#930a0f",
        "primary-bg": "#1c1e1f",
        "secondary-bg": "#1e2122",
        "secondary-light-bg": "#212425",
        "btn-green": "#65a91a",
        "btn-hover-green": "#6a9a19",
        "second-text": "#cbc7c0",
        "dark-text": "#aaa398",
        "component-bg": "#181a1b",
      },
      fontFamily: {
        "sans-pro": "sans-pro",
        "helvetica-400": "helvetica-400",
        "helvetica-500": "helvetica-500",
        "helvetica-700": "helvetica-700",
      },
    },
  },
  plugins: [],
};
