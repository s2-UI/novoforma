/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5757',
          500: '#ff2323',
          600: '#fe0000',
          700: '#d70000',
          800: '#b10303',
          900: '#920a0a',
          950: '#500000',
        },
        secondary: '#e80b03',
      },
    },
  },
  plugins: [],
}
