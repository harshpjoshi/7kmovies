/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-blue": "#5D87FF",
        "dark-bg": "#141420",
        "dark-card-bg": "#191D30",
      },
    },
  },
  plugins: [],
};
