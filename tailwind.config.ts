import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Pretendard',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'Newsreader',
          'Iowan Old Style',
          'Palatino Linotype',
          'Palatino',
          'Georgia',
          'serif',
        ],
      },
      colors: {
        ivory: {
          50: '#FBF7EF',
          100: '#F4EEDF',
          200: '#E6DCC6',
        },
        ink: {
          950: '#090807',
          800: '#1C1714',
          700: '#342D27',
          500: '#6F665C',
        },
        brand: {
          600: '#8F1D1D',
          700: '#6F1515',
          900: '#3F0B0B',
        },
        line: {
          DEFAULT: 'rgba(9, 8, 7, 0.14)',
          strong: 'rgba(9, 8, 7, 0.24)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
