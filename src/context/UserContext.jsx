import React, { createContext, useReducer, useState } from "react";

export const userContext = createContext();

export function UserProvider({ children }) {
  // const [user, setUser] = useState("Guest");
  function userReducer(state, action) {
    if (action.type == "login") {
      return { user: action.payload };
    }
    if (action.type == "logout") {
      return { user: "Guest" };
    }
  }
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
