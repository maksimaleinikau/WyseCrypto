import { createContext, useContext, ReactNode, useState } from "react";
import { AuthContextType } from "./AuthContext.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = () => {
    setIsAuthorized(true);
    console.log("logged in");
  };
  const logout = () => {
    setIsAuthorized(false);
    console.log("logged out");
  };
  const value: AuthContextType = {
    isAuthorized,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
