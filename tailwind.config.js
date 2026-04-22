/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pdf: {
          dark: '#1e1e2e',
          darker: '#181825',
          light: '#cdd6f4',
          accent: '#cba6f7',
          surface: '#313244',
          border: '#45475a'
        }
      }
    },
  },
  plugins: [],
}
