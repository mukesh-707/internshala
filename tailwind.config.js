// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include your `app` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include components
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb", // Define `border-border` color (adjust to your design)
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

