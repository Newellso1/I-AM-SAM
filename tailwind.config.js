const {
  Rubik,
  Rubik_Wet_Paint,
  Zen_Tokyo_Zoo,
  Caveat,
  Inter,
} = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik_Wet_Paint: ["Rubik-Wet-Paint"],
        Zen_Tokyo_Zoo: ["Zen-Tokyo-Zoo"],
        Caveat: ["Caveat"],
        Inter: ["Inter"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#272932",
        body: "#fff2e5",
        highlight: "#9ebad8",
      },
    },
  },
  plugins: [],
};
