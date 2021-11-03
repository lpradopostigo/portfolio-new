module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./source/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "display-0": ["Raleway", "sans-serif"],
      "display-1": ["Quicksand", "sans-serif"],
      "display-2": ["Oxanium", "cursive"],
      "sans": ["Roboto", "sans-serif"]
    },
    height: {
      "screen-10": "10vh",
      "screen-90": "90vh",
    },

    screens:{
      xs: '480px'
    }
  },
};
