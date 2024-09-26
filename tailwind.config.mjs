/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0faff',
          100: '#e0f4fe',
          200: '#bae6fd',
          300: '#7dd1fc',
          400: '#38b7f8',
          500: '#0e9fe9',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075a85',
          900: '#0c4d6e',
          950: '#083349',
          default: '#0e9fe9',
        },
        secondary: '#e80b03',
      },
    },
  },
	plugins: [],
}
