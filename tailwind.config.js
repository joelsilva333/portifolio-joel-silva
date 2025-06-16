/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Inconsolata: ["Inconsolata", "monospace"],
      },
      textColor: {
        whiteDefault: "#DEE5EF",
        blueDefault: "#0F172A",
        blueSecondary: "#223975",
      },
      backgroundColor: {
        whiteDefault: "#DEE5EF",
        blueDefault: "#0F172A",
        blueSecondary: "#223975",
      },
    },
  },
  plugins: [],
};
