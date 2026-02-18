import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);

  function login(token) {
    localStorage.setItem("token", token);
    setToken(token);
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    isAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
