/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // Cyan
        secondary: "#0ea5e9", // Light Blue
        accent: "#22d3ee", // Bright Cyan
        dark: "#0a1f2e", // Exact teal from reference
        darker: "#112240", // Darker Navy
        glass: "rgba(6, 182, 212, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
  },
}
