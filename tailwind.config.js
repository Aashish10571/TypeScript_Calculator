/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primary: {
                'bg-dark': '#22252D',
                'bg-light': '#292D36',
                'bg-btn': '#272B33'
            },
            accent: {
                'lg-green': '#26AC9F',
                'lg-orange': '#F56A68'
            },
            neutral: {
                'lg-white': '#FDFDFD',
                'drk-white': '#B7B8BB'
            }
        }
    },
  },
  plugins: [],
}
