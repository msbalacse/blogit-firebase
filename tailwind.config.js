/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-light": "var(--secondary-light)",
      },
      fontFamily: {
        Poppin: "Poppins, sans-serif",
        Victor: "Victor Mono, monospace",
      },
    },
  },
  plugins: [],
};
