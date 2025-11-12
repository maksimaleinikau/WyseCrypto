export interface AuthContextType {
  isAuthorized: boolean;
  login: () => void;
  logout: () => void;
}
