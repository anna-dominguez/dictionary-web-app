/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      headingXL: ['64px', '77px'],
      headingL: ['32px', '38px'],
      headingM: ['24px', '29px'],
      headingS: ['20px', '24px'],
      bodyXL: ['20px', '20px'],
      bodyL: ['18px', '24px'],
      bodyM: ['16px', '16px'],
      bodyS: ['15px', '24px'],
    },
    colors: {
      white: '#FFFFFF',
      lightestGrey: '#F4F4F4',
      lightGrey: '#E9E9E9',
      grey: '#757575',
      darkGrey: '#3A3A3A',
      lightestBlack: '#2D2D2D',
      lightBlack: '#1F1F1F',
      black: '#050505',
      purple: '#A445ED',
      red: '#FF5252',
    },
    fontFamily: {
      sans: 'Inter',
      serif: 'Lara',
      mono: 'Inconsolata',
    },
    extend: {},
  },
  plugins: [],
}
