/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-focus':
          'linear-gradient(90deg, white 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, white 100%)',
      },
      container: {
        center: true,
      },
      colors: {
        'primary-dark': '#DA0042',
        primary: '#FF385c',
        'primary-light': '#ff4c6c',
        secondary: '#00A699',
      },
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
