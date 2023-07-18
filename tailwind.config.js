/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1b1c22",

          secondary: "#ecf3ff",

          accent: "#29dbb4",

          neutral: "#0f0d0a",

          base: "#f4f3f6",

          info: "#7bd1e5",

          success: "#0d7339",

          warning: "#e7af13",

          error: "#f07666",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
