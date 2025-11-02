/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000080',
        accent: '#008080',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
