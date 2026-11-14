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
        darkBg: '#1A2A1A',
        themeLight: '#E5E8CE',
        magenta: '#789575',
        purple: '#5A7A58',
        orange: '#6B8F69',
        azure: '#8CAA87',
        emerald: '#A4B89E',
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
