import { useState, useContext, useMemo, createContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // create a boolean value to return
    const checkLogin =
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD;
    if (checkLogin) setUser(email);
    return checkLogin;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
    // what is callback doing?
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser can not be used outside of UserProvider');
  }

  return context;
};
