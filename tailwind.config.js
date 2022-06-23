module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Kristi: ["Kristi", "cursive"],
        Poppins: ["Poppins", 'sans-serif']
      },
      backgroundImage:{
        'bg-sec':"url('/src/Image/bg_sec.jpg')",
        'hero-bg':"url('/src/Image/hero_main.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
