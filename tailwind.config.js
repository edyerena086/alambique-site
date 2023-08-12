/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Inter'],
        body: ['Oswald'],
      },
      borderWidth: {
        '6': '6px',
      },
      padding: {
        'section': '3.75rem'
      },
      colors: {
        greyLight: '#f8f9fa',
        grey: '#999999',
        greyDark: '#222222',
        pink: '#E4007C',
      }
    },
  },
  plugins: [],
}

