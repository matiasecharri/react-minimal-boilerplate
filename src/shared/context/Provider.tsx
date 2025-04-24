import { ReactNode } from "react";
import { DarkModeProvider } from "./darkMode";
import { AuthProvider } from "./auth";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <DarkModeProvider>
      <AuthProvider>{children}</AuthProvider>
    </DarkModeProvider>
  );
};
