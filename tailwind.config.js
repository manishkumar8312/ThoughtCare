/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFE5EC',
        'soft-purple': '#E8D5FF',
        'soft-blue': '#D5E8FF',
        'soft-green': '#D5FFE8',
        'soft-yellow': '#FFF5D5',
        'pastel-pink': '#FFB3C1',
        'pastel-purple': '#C8B6FF',
        'pastel-blue': '#B6D9FF',
        'pastel-green': '#B6FFC8',
        'pastel-yellow': '#FFEB3B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
