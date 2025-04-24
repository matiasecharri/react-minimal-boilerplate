import { ReactNode, createContext, useContext, useState } from "react";
import { DarkModeType } from "./darkMode.models";

interface DarkModeContextProps {
  isDarkMode: DarkModeType;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("useDarkMode must be used within <DarkModeProvider>");

  return context;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("isDarkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const next = !prevState;
      localStorage.setItem("isDarkMode", JSON.stringify(next));
      return next;
    });
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
