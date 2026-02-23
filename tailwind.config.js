export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./example/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  darkMode: "class",
};
