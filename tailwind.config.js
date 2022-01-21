module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./source/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        "screen-10": "10vh",
        "screen-8": "8vh",
        "screen-4": "4vh",
        "screen-90": "90vh",
        "screen-92": "92vh",
      },

      screens: {
        xs: "480px",
      },
    },

    fontFamily: {
      "display-0": ["Raleway", "sans-serif"],
      "display-1": ["Quicksand", "sans-serif"],
      "display-2": ["Oxanium", "cursive"],
      sans: ["Roboto", "sans-serif"],
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
