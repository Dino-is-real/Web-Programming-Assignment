// ThemeContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Consumer Component
export const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const style = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme} className="btntheme">Toggle Theme</button>
    </div>
  );
};
