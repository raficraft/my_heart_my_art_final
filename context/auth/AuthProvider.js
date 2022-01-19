import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  /**
   * Modal Initial Context
   */
  const [auth, setAuth] = useState({
    isAuth: false,
    role: 0,
    user: [
      {
        name: false,
        email: false,
      },
    ],
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}
