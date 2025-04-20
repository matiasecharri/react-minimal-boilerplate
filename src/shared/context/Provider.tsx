import { ReactNode } from "react";
import { DarkModeProvider } from "./dark-mode";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
