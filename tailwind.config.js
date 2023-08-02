/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        'theme-white': '#f4f5fa',
        'theme-btn-green': '#d0e6d8',
        'theme-btn-text-green': '#15803D',
        'theme-green-2': '#519C66',
        'theme-btn-gray': '#5E636614',
        'theme-btn-sky-blue': '#E0E7FF',
        'theme-btn-gray-2': '#374151;',
        'theme-gray-1': '#BEC0CA',
        'theme-btn-red': '#CC5F5F',
        'theme-blue-2': '#5570F1',
        'theme-blue-3': '#DDD6FE',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}