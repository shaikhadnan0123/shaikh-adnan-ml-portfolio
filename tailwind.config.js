/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Kanit', 'sans-serif'],
      },
      colors: {
        darkBg: '#0C0C0C',
        themeLight: '#D7E2EA',
        magenta: '#B600A8',
        purple: '#7621B0',
        orange: '#BE4C00',
        azure: '#00A8FF',
        emerald: '#00B68A',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'blink': 'blink-cursor 1s step-end infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
