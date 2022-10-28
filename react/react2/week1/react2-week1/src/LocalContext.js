import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
