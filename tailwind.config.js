/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/{components,helpers,pages}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
    extend: {
      colors: {
        android: '#78C257',
        apple: '#000000',
        booya: '#00D2C4',
        facebook: '#4267B2',
        google: '#4285F4',
        github: '#333',
        grindery: '#141416',
        hubspot: '#FF7A59',
        instagram: '#405DE6',
        inboundlabs: '#E85338',
        tunga: '#da3451',
        twitter: '#1DA1F2',
        windows: '#00A4EF',
      },
    },
  },
  plugins: [],
};
