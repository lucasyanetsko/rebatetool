/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LG Brand Colors
        primary: {
          50: '#fef2f4',
          100: '#fde6eb',
          200: '#fbd0d9',
          300: '#f7a9bb',
          400: '#f17797',
          500: '#e74873',
          600: '#d42d5e',
          700: '#A50034',  // Heritage Red (main)
          800: '#8a0029',
          900: '#70001f',
        },
        'lg-heritage': '#A50034',  // Heritage Red
        'lg-active': '#FD312E',    // Active Red
        'lg-warm-grey': '#F0ECE4', // Warm Grey
      },
      fontFamily: {
        sans: ['LG EI Text', 'system-ui', '-apple-system', 'sans-serif'],
        headline: ['LG EI Headline', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

