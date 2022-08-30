module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}'],
  darkMode: ['class', '[data-theme="dark"]', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
