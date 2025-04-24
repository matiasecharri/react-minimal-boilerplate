import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "./user.models";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User;
  toggleLogged: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within <AuthProvider>");

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({ name: "Matias", isLogged: false });

  const toggleLogged = () =>
    setUser((prevState) => ({
      ...prevState,
      isLogged: !prevState.isLogged,
    }));

  return (
    <AuthContext.Provider value={{ user, toggleLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
