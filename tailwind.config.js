/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      colors: {
        brand: {
          50: "#f5faff",
          100: "#e0f2ff",
          200: "#b9e6ff",
          300: "#7cd4ff",
          400: "#36bffa",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },

      boxShadow: {
        soft: "0 4px 14px 0 rgba(0, 0, 0, 0.05)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },

  plugins: [],
};
