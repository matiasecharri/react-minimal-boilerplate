import { ReactNode } from "react";
import { DarkModeProvider } from "./darkMode";
import { UserProvider } from "./user";

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
