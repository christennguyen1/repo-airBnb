module.exports = {
  important: true,
  // mode: 'jit',

  purge: ["./src/**/*.js", "./src/**/**/*.js"],
  darkMode: "class", // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        dark: "rgba(0,0,0,.87);",
      },
      borderWidth: {
        5: "5px",
        1: "1px",
      },
      borderColor: {},
      height: {
        84: "336px",
      },
      width: {
        22: "88px",
      },
      maxHeight: {
        "max-content": "max-content",
      },
      maxWidth: {},
      container: {
        padding: {
          DEFAULT: "3rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      minHeight: {
        0: "0",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundColor: {},
      boxShadow: {},
    },
  },
  variants: {
    extend: {
      scale:['active','hover'],
      backgroundColor:['active'],
      translateX:['hover'],
      translateY:['transform']
    },
  },
};
