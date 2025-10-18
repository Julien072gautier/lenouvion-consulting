/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#eb5e2d',
          '50': '#fef2f0',
          '100': '#fde5e1',
          '200': '#fbcbc3',
          '300': '#f8a99a',
          '400': '#f47c66',
          '500': '#eb5e2d',
          '600': '#d44a1a',
          '700': '#b03a15',
          '800': '#8c2e12',
          '900': '#68220e',
        }
      }
    },
  },
  plugins: [],
};