/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F8F6EC',
        secondary: '#E2E6DA',
        ink: '#263526',
        'ink-muted': '#566452',
        surface: '#F6F4E9',
        bg: '#5D6B59',
        wine: {
          50: '#FCF6E7',
          100: '#F8EDCC',
          200: '#F2DEAD',
          300: '#EBCB82',
          400: '#E4BA5E',
          500: '#D9A94D',
          600: '#C3913E',
          700: '#A87631',
          800: '#885C2A',
          900: '#6D4A23',
        },
        cream: {
          50: '#F8F6EC',
          100: '#E8E8D8',
          200: '#D2D7C3',
          300: '#BBC2AC',
          400: '#9AA68D',
          500: '#7D8D75',
          600: '#687863',
          700: '#556550',
          800: '#445241',
          900: '#344032',
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
