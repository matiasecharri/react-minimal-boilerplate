import { ReactNode, createContext, useContext, useState } from "react";
import { DarkModeType } from "./dark-mode.models";
import { useReverseState } from "@/shared/hooks";

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

  if (context === undefined) {
    throw new Error(
      "useDarkMode must be used within <DarkModeProvider>"
    );
  }

  return context;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = useReverseState(setIsDarkMode);

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
