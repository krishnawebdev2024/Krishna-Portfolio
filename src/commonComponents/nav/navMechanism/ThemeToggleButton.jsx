import React from "react";
import { useTheme } from "./ThemeContext.jsx";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-400 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md"
    >
      {isDarkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggleButton;
