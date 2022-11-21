/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/components/**/*.{vue,js}',
    './src/components/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/layouts/*.vue',
    './src/pages/**/*.vue',
    './src/pages/*.vue',
    './plugins/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
}
