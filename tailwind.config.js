/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monsterkat-green': '#50A584',
      },
    },
    fontFamily: {
      'Gruppo': ['Gruppo', 'sans-serif'],
    }
  },
  plugins: [],
}

