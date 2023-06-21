/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-dark': '#2b3d4f',
        'lavanda': '#354a5f',
        'lavanda-light': '#808d8e',
        'yellow-light': '#2ecc70',
        'p-yellow': '#3398db',
      }
    },
  },
  plugins: [],
}

// Cape Cod

// #4a4f4e

// rgb(74, 79, 78)

// Bali Hai

// #8e9aaf

// rgb(142, 154, 175)

// Botticelli

// #c7d6e1

// rgb(199, 214, 225)

// Aths Special

// #efe4d7

// rgb(239, 228, 215)

// Ronchi

// #f1b24b

// rgb(241, 178, 75)


