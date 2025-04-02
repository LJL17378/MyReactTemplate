/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

