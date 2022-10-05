/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FAFAFA",
        accent: "#57155C",
        body1: "#1A0114",
        secondary: "#160B32",
        btn1: "#70155A",
        secondaryLight: "#F5C9FA",
        text2: "#9A0647",
        white: "#FFFFFF",
        'smoke-light': 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
