import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

const DarkModeContext = createContext<{
  darkModeEnabled: boolean;
  toggleDarkMode: () => void;
}>({ darkModeEnabled: false, toggleDarkMode: () => {} });

export const useDarkModeContext = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [darkModeEnabled, setDarkModeEnabled] = useState(isSystemDark);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <DarkModeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
