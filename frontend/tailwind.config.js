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
				// secondary:  "#987AB4",
				secondary:  "#99CA3B",
				dark:       "#444444",
				light:      "#f7f8f9",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

