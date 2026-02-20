import { useState } from "react";
import { AuthContext } from "./AuthContext";

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
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
