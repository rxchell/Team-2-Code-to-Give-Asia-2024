import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#FED700",
				secondary:  "#99CA3B",
				dark:       "#444444",
				light:      "#f7f8f9",
        halal:      '#003b01',
        spicy:      '#701403',
        vegan:      '#034170',
        glutenFree: '#4f2b02',
        lowSugar:   '#3a1342',
      },
      scrollbar: {
        'hide': 'hidden',
      },
    },
  },

  plugins: [
    require('daisyui'),
    require('tailwindcss-scrollbar'),
  ],
}

