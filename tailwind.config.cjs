module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    "bg-brand-dark",
    "bg-brand-medium",
    "bg-brand-lightest",
    "bg-accent-orange",
    "bg-neutral-dark",
    "bg-neutral-light",
    "text-brand-dark",
    "text-brand-medium",
    "text-neutral-dark",
    "text-neutral-light",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: "#027D8F",       // Primary institutional color 
          medium: "#09BE9C",     // Accent hover color
          lightest: "#E0F5F7",   // Light mint background for sections
        },
        accent: {
          orange: "#FF5715",     // Call-to-action buttons 
        },
        neutral: {
          dark: "#0F0A0A",       // Default text color (almost black)
          light: "#F5EDEF",      // Light background for footer and dropdown
        },
      },
    },
  },
  plugins: [],
};
