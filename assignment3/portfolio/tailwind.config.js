/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        text: "#FDE5D4",
        "bg-color": "#222831",
        accent: "#F11A7B",
      },
    },
  },
  plugins: [],
};
