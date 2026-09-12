/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#070709',
        'brand-card': 'rgba(25, 25, 30, 0.6)',
        'brand-red': '#ff2a2a',
        'brand-red-glow': 'rgba(255, 42, 42, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
