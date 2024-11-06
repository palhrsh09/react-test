/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',    // Custom extra small screen size
        'sm': '640px',    // Small screen (default Tailwind)
        'md': '768px',    // Medium screen (default Tailwind)
        'lg': '1024px',   // Large screen (default Tailwind)
        'xl': '1280px',   // Extra large screen (default Tailwind)
        '2xl': '1536px',  // 2X large screen (default Tailwind)
        '3xl': '1920px',  // Custom extra large screen
      },
    },
  },
  plugins: [],
}