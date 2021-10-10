module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "mono"],
      },
      colors: {
        "navy-lighter": "#112240",
        "navy-light": "#0a192f",
        "navy-dark": "#020c1b",
        "navy-green": "#64ffda",
        "slate-light": "#ccd6f6",
        slate: "#8892b0",
      },
    },
  },
  variants: {},
  plugins: [],
};
