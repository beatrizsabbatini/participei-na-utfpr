import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthProps{
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface AuthProviderProps{
  children: ReactNode;
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({children, }: AuthProviderProps){
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return(
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };