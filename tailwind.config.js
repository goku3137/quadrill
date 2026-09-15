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
        'brand-blue': '#1B81E5',
        'brand-blue-glow': 'rgba(27, 129, 229, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
