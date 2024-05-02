import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      }
    },
  },
  plugins: [],
}

