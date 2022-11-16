import React, { ReactNode, useContext, useState } from "react";
import * as auth from "../auth-provider";
import { user as User } from "../types/project-list";

export interface Form {
  username: string;
  password: string;
}
type contextType = {
  user: User | null;
  login: (form: Form) => Promise<void>;
  register: (form: Form) => Promise<void>;
  logout: () => Promise<void>;
};
const AppContext = React.createContext<contextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: Form) => auth.login(form).then((user) => setUser(user));
  const register = (form: Form) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));
  return (
    <AppContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};
export const useAuth = () => {
  const content = useContext(AppContext);
  if (!content) {
    throw new Error("useAuth 必须在 AuthProvider中使用");
  }
  return content;
};
