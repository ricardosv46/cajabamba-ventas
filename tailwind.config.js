const { themes } = require('./@tailwind/theme')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...themes,
      },
      animation: {
        move: 'move 1s ease-in-out',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(50%)', transform: 'translateZ(50%)' },
          '100%': { transform: 'translateX(0)', transform: 'translateZ(0)' }
        }
      }
    }
    // fontFamily: {
    //   sans: `"Open Sans", ${defaultTheme.fontFamily.sans.join(',')}`,
    //   mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
    // }
  },
  plugins: [
    require('./@tailwind/plugins/icons'),
    require('./@tailwind/plugins/titles'),
    require('./@tailwind/plugins/buttons'),
    require('./@tailwind/plugins/paragraphs')
  ]
}
