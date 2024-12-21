import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode) {
      localStorage.setItem("darkMode", "disabled");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("darkMode", "enabled");
      document.documentElement.classList.add("dark");
    }
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
