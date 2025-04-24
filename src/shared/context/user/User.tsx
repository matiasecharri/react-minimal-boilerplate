import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "./user.models";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User;
  toggleLogged: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useUser must be used within <UserProvider>");

  return context;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({ name: "Matias", isLogged: false });

  const toggleLogged = () =>
    setUser((prevState) => ({
      ...prevState,
      isLogged: !prevState.isLogged,
    }));

  return (
    <UserContext.Provider value={{ user, toggleLogged }}>
      {children}
    </UserContext.Provider>
  );
};
