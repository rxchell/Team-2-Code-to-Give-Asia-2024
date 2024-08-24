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
        egg:        '#d1e805',
        peanut:     '#ed8b28',
        milk:       '#f2a1a1',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

