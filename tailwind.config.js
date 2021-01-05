module.exports = {
  purge: {
    enabled: process.env.BRIDGETOWN_ENV === 'production',
    content: [
      "./src/**/*.md",
      "./src/**/*.html",
      "./src/**/*.liquid",
      "./frontend/javascript/**/*.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
