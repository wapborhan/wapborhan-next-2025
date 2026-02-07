"use client"; // Ensure this is treated as a client component

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full  transition duration-300 ease-in-out"
    >
      {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
