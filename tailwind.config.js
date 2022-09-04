/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/Common/.{js.jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f6f6",
        text: "#0d1d2c",
      },
    },
  },
  plugins: [],
};
