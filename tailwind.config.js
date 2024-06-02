/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sarala: ["Sarala", "sans-serif"],
    },
    extend: {
      colors: {
        //convert rgba(44, 48, 54, 1) to hex
        primary: "#2c3036",
        secondary: "#F0F0F0",
        bgprimary: "#FFFFFF",
        bgsecondary: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
