/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#444444',
        bg: '#FFEEE1',
        wine: {
          50: '#fdf2f4',
          100: '#fbe5ea',
          200: '#f5c5cf',
          300: '#ed9aae',
          400: '#e06888',
          500: '#800020',
          600: '#6e001b',
          700: '#5a0017',
          800: '#4a0014',
          900: '#3e0012',
        },
        cream: {
          50: '#FFEEE1',
          100: '#fce8d8',
          200: '#f5ceb3',
          300: '#ecb08a',
          400: '#e38d61',
          500: '#dc7443',
          600: '#c55f38',
          700: '#a34a30',
          800: '#863d2d',
          900: '#703429',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
