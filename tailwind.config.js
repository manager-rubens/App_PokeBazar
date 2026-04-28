/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F",
        "primary-shadow": "#E03E43",
        accent: "#00D09C",
        "accent-shadow": "#00A67C",
        highlight: "#FFD166",
        canvas: "#F7F9FC",
        surface: "#FFFFFF",
        ink: "#2D3142",
        muted: "#9094A6"
      },
      fontFamily: {
        display: ["Fredoka", "Nunito", "sans-serif"],
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(45, 49, 66, 0.08)",
        lift: "0 16px 32px rgba(45, 49, 66, 0.12)",
        mint: "0 0 0 4px rgba(0, 208, 156, 0.2), 0 14px 30px rgba(0, 208, 156, 0.18)"
      }
    }
  },
  plugins: []
};
