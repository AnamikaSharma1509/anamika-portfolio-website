/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // root HTML file
    "./src//*.{js,jsx,ts,tsx}",  // scan everything in src, including components & pages
    "./src/components//*.{js,jsx,ts,tsx}", // explicit components folder
    "./src/pages//*.{js,jsx,ts,tsx}",      // explicit pages folder
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
