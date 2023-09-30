/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    backgroundImage: {
      "illustration-desktop":
        "url('./images/illustration-sign-up-desktop.svg')",
      "illustration-mobile": "url('./images/illustration-sign-up-mobile.svg')",
      "icon-success": "url('./images/icon-success.svg')",
      button: "linear-gradient(to right, #FF5479 0%, #FF6740 100%)",
    },
    listStyleImage: {
      "check-icon": "url('./images/icon-list.svg')",
    },
    colors: {
      "dark-slate-grey": "#242742",
      "charcoal-grey": "#36384e",
      grey: "#9294a0",
      white: "#ffffff",
      tomato: "#ff6257",
    },
    boxShadow: {
      button: "0 10px 30px -12px rgb(255 98 87 / 1)",
    },
  },
  plugins: [],
};
