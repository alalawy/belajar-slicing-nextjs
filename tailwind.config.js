/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        poppins: ['"poppins"', "sans-serif"]
      },
      colors:{
        primary: "#FF6525",
        text:{
          primary: "#1C1C1C",
          secondary: "#212838",
          tertiary: "#373737",
          hijau: "#4E8D7C"
        },
        bg:{
          primary: "#FAF8F4",
          secondary: "#E3EBD6"
        }
      }
    },
  },
  plugins: [],
}
