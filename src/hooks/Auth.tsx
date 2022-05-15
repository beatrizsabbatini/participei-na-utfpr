import firebase from "firebase";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthProps{
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

interface AuthProviderProps{
  children: ReactNode;
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({children, }: AuthProviderProps){
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])
  

  return(
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isAdmin,
        setIsAdmin
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