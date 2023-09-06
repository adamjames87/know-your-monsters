/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['Amatic SC', 'cursive'],
        pm: ['Permanent Marker', 'sans-serif'],
      }
    }
  },
  plugins: []
};
