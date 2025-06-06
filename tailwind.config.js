/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#018765", // Un verde similar al de la app
        "primary-dark": "#004D38",
        accent: "#10B981", // Un verde más claro
        background: "#FFFFFF",
        surface: "#F3F4F6", // Gris claro para fondos de cards, inputs
        text: "#1F2937", // Gris oscuro para texto principal
        "text-secondary": "#6B7280", // Gris medio para texto secundario
        border: "#E5E7EB",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        // Define tus fuentes si las tienes en assets/fonts/
        sans: ["OpenSans_400Regular"],
        "open-sans": ["OpenSans_400Regular"],
        "open-sans-italic": ["OpenSans_400Regular_Italic"],
        "open-sans-medbold": ["OpenSans_500Medium"],
        "open-sans-semibold": ["OpenSans_600SemiBold"],
        "open-sans-bold": ["OpenSans_700Bold"],

        "poppins-regular": ["Poppins_400Regular"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
