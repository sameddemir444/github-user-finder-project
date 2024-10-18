/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },

      colors: {
        header: "#F6F5F2",
        background: "#FBFAF9",
        header2: "#E4E0D8",
        text: "#2e3035",
        hover: "#67696f",
        alertInfo: "#c9c2b4",
        alertWarning: "#BC7C7C",
        alertSuccess: "#CEE5D0",
        alertBlue: "#bcd2dd",
        darktheme1: "#2e3035",
        darktheme2: "#202225",
        alertYellow: "#FBFACD",
        alertGreen: "#737f63",
      },
    },
  },
  plugins: [],
};
