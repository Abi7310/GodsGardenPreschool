/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bubblegum Sans', 'cursive'],
        display: ['Bubblegum Sans', 'cursive'],
        comic: ['Comic Neue', 'cursive']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#FFBE0B',
          light: '#FFD44F',
          dark: '#CC9800'
        },
        secondary: {
          DEFAULT: '#004B23',
          light: '#006B33',
          dark: '#003518'
        }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};