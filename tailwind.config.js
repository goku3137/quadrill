/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#081226',
        'brand-navy': '#10244C',
        'brand-card': 'rgba(13, 27, 54, 0.7)',
        'brand-gold': '#C6AA7C',
        'brand-gold-hover': '#D8BE93',
        'brand-blue': '#C6AA7C',
        'brand-blue-glow': 'rgba(198, 170, 124, 0.35)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
