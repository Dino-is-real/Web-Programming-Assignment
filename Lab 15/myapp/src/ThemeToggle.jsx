
import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default ThemeToggle;

