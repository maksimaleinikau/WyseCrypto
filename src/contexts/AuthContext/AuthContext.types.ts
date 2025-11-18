export interface AuthContextType {
  isAuthorized: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export interface User {
  email: string;
  fullName?: string;
  phoneNumber?: string;
  password: string;
}
