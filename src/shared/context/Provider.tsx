import { ReactNode } from "react";
import { DarkModeProvider } from "./darkMode";
import { UserProvider } from "./auth";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <DarkModeProvider>
      <UserProvider>{children}</UserProvider>
    </DarkModeProvider>
  );
};
