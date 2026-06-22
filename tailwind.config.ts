import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#111827',
          700: '#374151',
          500: '#6B7280',
        },
        brand: {
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
