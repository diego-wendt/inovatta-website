/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        heroSM: "url('./assets/hero-640x424.jpg')",
        heroMD: "url('./assets/hero-1280x848.jpg')",
      },
      colors: {
        primary: {
          light5: "#EEDAE8",
          light4: "#DDB6D0",
          light3: "#CB92BA",
          light2: "#B86FA3",
          light1: "#A54A8D",
          DEFAULT: "#901D78",
          dark1: "#771D63",
          dark2: "#5F1B4F",
          dark3: "#47183C",
          dark4: "#31142A",
          dark5: "#1D0E18",
        },
        // gradiente
        // #901d78 -> #ba269A
      },
    },
  },
  plugins: [],
};
