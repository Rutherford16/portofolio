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
        background: '#0c1314',
        primary: '#b7cacb',
      },
      fontFamily: {
        firaCode: ['firaCode'],
        firaMono: ['firaMono'],
      },
    },
  },
  plugins: [],
}
