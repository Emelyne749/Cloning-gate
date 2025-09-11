/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./scr**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Helvetica',
          'Arial',
          'ui-sans-serif', 
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

