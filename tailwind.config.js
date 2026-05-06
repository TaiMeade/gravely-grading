/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  corePlugins: {
    // Disable preflight to avoid conflicts with Vuetify's CSS reset
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#3D2B1F',
          800: '#4E3728',
          700: '#6B4C3B',
          600: '#8C6550',
        },
        gold: {
          400: '#F0C040',
          500: '#D4A017',
          600: '#B8860B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
