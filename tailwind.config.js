/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        lightBackground: "#F4F6F9", // Soft, neutral light background for a clean look
        darkBackground: "#1F2937", // Dark, muted blue-gray for a professional, elegant background
        cardDarkBackground: "#2D3748", // Deep slate for card backgrounds
        backgroundAlt: "#F9FAFB", // Light and fresh background for alternative areas
        darkBackgroundAlt: "#1E2A3A", // Slightly deeper blue-gray for variety

        // Foreground colors
        lightForeground: "#4B5563", // Muted gray with a touch of blue for non-dominant elements
        darkForeground: "#FFFFFF", // Crisp white for high contrast text

        // Text colors
        lightText: "#2F3C48", // Dark gray with subtle blue undertones for text
        darkText: "#F1F5F9", // Soft, off-white text for readability on dark backgrounds
        textMuted: "#6B7280", // Medium gray for secondary text
        textPlaceholder: "#A0AEC0", // Muted gray for placeholder text

        // Primary and secondary
        primary: "#4C51BF", // A rich, deep blue for primary accents (more professional and modern)
        secondary: "#7F9CF5", // Soft, pastel blue to complement primary color
        "primary-light": "#f7f7f7", // Light mode primary color
        "primary-dark": "#2c3e50", // Dark mode primary color

        // Success, error, warning, info
        success: "#38A169", // Strong green for success messages
        error: "#E53E3E", // Vibrant red for error states
        warning: "#F6AD55", // Warm, approachable orange for warnings
        info: "#63B3ED", // Soft blue for informational messages

        // Neutral colors
        neutralLight: "#FFFFFF", // Clean, neutral white for sections with minimal visual weight
        neutral: "#E2E8F0", // Light gray for subtle background or less emphasized elements
        neutralDark: "#2D3748", // Deep gray for darker accents

        // Buttons
        buttonHover: "#434190", // Hover effect with a darker, richer blue
        buttonFocus: "#3C366B", // Focus color for buttons with a deeper purple-blue
        buttonDisabled: "#E4E8F0", // Light grayish-blue for disabled state

        // Borders
        borderLight: "#E2E8F0", // Subtle, soft light borders for clean separations
        borderDark: "#4A5568", // Darker, grayish borders for subtle contrasts

        // Gradients
        gradientStart: "#5A67D8", // A deep, rich blue for gradient start
        gradientEnd: "#A0B1F3", // Light, muted blue for gradient end

        // Overlays
        overlayLight: "rgba(255, 255, 255, 0.7)", // Light overlay for modals, etc.
        overlayDark: "rgba(31, 41, 55, 0.7)", // Dark overlay for modals, etc.

        // Accents
        accent: "#D53F8C", // Bold accent color for key buttons or highlights

        // Headings
        headingPrimary: "#1A202C", // Strong, dark gray for primary headings
        headingSecondary: "#EDF2F7", // Light, almost white, for secondary headings

        // Branding (if applicable)
        brandPrimary: "#2B6CB0", // Professional blue for brand elements
        brandSecondary: "#C53030", // Warm red for impactful brand accents
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
