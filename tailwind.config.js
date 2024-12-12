/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        lightBackground: "#F4F4F4",
        darkBackground: "#262331",
        //darkBackground: "#252525",
        cardDarkBackground: "#342F43",
        backgroundAlt: "#f3f4f6",
        darkBackgroundAlt: "#2d3748",

        // Foreground colors
        lightForeground: "#696773",
        darkForeground: "#FEFEFF",

        // Text colors
        lightText: "#1a202c",
        darkText: "#f9fafb",
        textMuted: "#6b7280",
        textPlaceholder: "#9ca3af",

        // Primary and secondary
        primary: "#FD853A",
        secondary: "#d97706",

        // Success, error, warning, info
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",

        // Neutral colors
        neutralLight: "#e5e7eb",
        neutral: "#9ca3af",
        neutralDark: "#374151",

        // Buttons
        buttonHover: "#6366f1",
        buttonFocus: "#4338ca",
        buttonDisabled: "#a5b4fc",

        // Borders
        borderLight: "#e2e8f0",
        borderDark: "#4a5568",

        // Gradients
        gradientStart: "#4f46e5",
        gradientEnd: "#d97706",

        // Overlays
        overlayLight: "rgba(249, 250, 251, 0.8)",
        overlayDark: "rgba(26, 32, 44, 0.8)",

        // Accents
        accent: "#ec4899",

        //Headings
        headingPrimary: "#1e293b",
        headingSecondary: "#f9fafb",

        // Branding (if applicable)
        brandPrimary: "#1e40af",
        brandSecondary: "#e11d48",
      },

      spacing: {
        small: "8px",
        medium: "16px",
        large: "24px",
        extraLarge: "32px",
        extraExtraLarge: "40px",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        thin: "0.5px",
        thick: "2px",
        extraThick: "4px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "ui-serif", "Times New Roman"],
        mono: ["SFMono-Regular", "Menlo", "Monaco"],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        50: "50",
        100: "100",
        modal: "999",
        overlay: "1000",
      },
    },
  },
  plugins: [],
};
