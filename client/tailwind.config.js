/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'header': '3rem',
      },
      colors: {
        'title-color': 'hsl(var(--hue), var(--sat), 25%)',
        'title-color-dark': 'hsl(var(--hue), var(--sat), 0%)',
        'text-color': 'hsl(var(--hue), var(--sat), 46%)',
        'body-color': 'hsl(var(--hue), var(--sat), 98%)',
        'container-color': '#fff',
      },
      zIndex: {
        'tooltip': '10',
        'fixed': '100',
        'modal': '1000',
      },
      screens: {
        'max-md': {'max': '768px'},
        'max-phone': {'max': '350px'},
      },
    },
  },
  plugins: [],
}

