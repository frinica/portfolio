/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow Condensed"],
        serif: [],
      },
      backgroundImage: {
        hero: "url(../public/assets/images/bg/bg-img.jpg)",
        heroDesktop: "url(../public/assets/images/bg/bg-img-desktop.jpg)",
      },
    },
  },
  plugins: [],
}
