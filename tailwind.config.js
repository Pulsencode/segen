/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "segen-navy": "#031A38",
        "segen-orange": "#EA6422",
        "segen-green": "#027B3E",
        "segen-yellow": "#F8BA12",
        "segen-red": "#C91E24",
      },
      fontFamily: {
        brandon: ['"Brandon Grotesque"', "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
