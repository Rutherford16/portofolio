/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#393646',
        primary: '#F4EEE0',
        secondary: '#6D5D6E',
        tertiary: '#4F4557',
      },
      fontFamily: {
        firaCode: ['firaCode'],
        firaMono: ['firaMono'],
        hemiHead: ['hemiHead'],
      },
    },
  },
  plugins: [],
}
