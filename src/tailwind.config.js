/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom Blue
          secondary: "#9333EA", // Custom Purple
          accent: "#F59E0B", // Custom Yellow
        },
      },
    },
    plugins: [],
  };