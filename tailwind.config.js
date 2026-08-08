/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8ef',
        terracotta: '#b85b35',
        govBlue: '#1f5e9c',
        navy: '#10263d',
      },
    },
  },
  plugins: [],
}
