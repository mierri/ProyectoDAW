/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        customYellow: '#E9A21A',
        customBlue: '#022C5E',
        hoverBlue: '#011A3E',
        colorprimary: '#022C5E',
        colorprimarydark: '#011A3E',
        colorsecondary: '#E9A21A',
        colorsecondarydark: '#8A5E22',
        colortertiary: '#F2F2F2',
        colorprimarylight: '#4A6FA5',
        colorprimarydarklight: '#2A4A75',
      }
    },
  },
  plugins: [],
}

