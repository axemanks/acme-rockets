/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)'},
        'desktop': { 'raw': '(max-aspect-ratio: 16/9)'},

      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'}, // bounces out 120%
          '100%': { transform: 'scaleY(1)'}, // back to 1
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      
      }
    },
  },
  plugins: [],
}
