import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES } from '../theme';

const ThemeContext = createContext({
  mode: 'light',
  colors: THEMES.light,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  // Optional: respect the user's OS preference on first load.
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) setMode('dark');
  }, []);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  const colors = THEMES[mode];

  return <ThemeContext.Provider value={{ mode, colors, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
