module.exports = {
  content: ["./public/**/*.html", "./source/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        "screen-10": "10vh",
        "screen-8": "8vh",
        "screen-4": "4vh",
        "screen-90": "90vh",
        "screen-92": "92vh",
      },

      width: {
        "screen-10": "10wh",
        "screen-8": "8wh",
        "screen-4": "4wh",
        "screen-90": "90vw",
        "screen-92": "92wh",
      },

      screens: {
        "2xs": "375px",
        xs: "425px",
      },
    },

    fontFamily: {
      display: ["Quicksand", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },

    colors: {
      white: "#fff",
      black: "#000",
      teal: "#00f5d4",
      blue: "#00bbf9",
      yellow: "#fee440",
      pink: "#f15bb5",
      purple: "#9b5de5",
    },
  },
};
