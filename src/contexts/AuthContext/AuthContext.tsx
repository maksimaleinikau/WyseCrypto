import { createContext, useContext, ReactNode, useState } from "react";
import { AuthContextType, User } from "./AuthContext.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const mockUser: User = {
      email,
      fullName: "Max Aleinikov",
      phoneNumber: "+375 29 111111",
      password,
    };
    setUser(mockUser);
    setIsAuthorized(true);
  };
  const logout = () => {
    setUser(null);
    setIsAuthorized(false);
  };
  const value: AuthContextType = {
    isAuthorized,
    user,
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
