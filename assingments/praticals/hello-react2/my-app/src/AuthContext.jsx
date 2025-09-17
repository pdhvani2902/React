import React, { createContext, useState } from "react";

// 1️⃣ Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in

  // login function
  const login = (username) => {
    setUser({ name: username });
  };

  // logout function
  const logout = () => {
    setUser(null);
  };

  return (
    // 2️⃣ Provide context value
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
