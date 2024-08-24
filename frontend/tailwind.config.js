/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#2F0067",
				// secondary:  "#987AB4",
				secondary:  "#B2A4C9",
				black:      "#444444",
				light:      "#f7f8f9",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

