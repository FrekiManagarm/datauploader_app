import React, { useState, createContext, useContext, useCallback } from "react";
// import localStorage from "../localStorage";
import { getAccessToken, getRefreshToken, getUser } from "../lib/localStorage";
import { type User } from '../lib/user';

type AuthContextProps = {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: User | null;
  setState: (newState: any) => void;
  updateState: (newState: any) => void;
  resetState: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  accessToken: "",
  refreshToken: "",
  user: null,
  setState: () => { },
  updateState: () => { },
  resetState: () => { },
});

const emptyState = {
  isLoggedIn: false,
  accessToken: "",
  refreshToken: "",
  user: null,
}

const getInitialState = () => {
  const accessToken = getAccessToken() ?? null;
  const refreshToken = getRefreshToken() ?? null;
  const user = getUser() as User ?? null

  if (refreshToken) {
    return {
      isLoggedIn: Boolean(accessToken && refreshToken),
      accessToken,
      refreshToken,
      user,
    }
  }

  return emptyState
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [accessToken, setAccessToken] = useState(localStorage.accessToken ?? "");
  // const [refreshToken, setRefreshToken] = useState(localStorage.refreshToken ?? "");
  // const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.accessToken && localStorage.refreshToken) ?? false);
  // const [user, setUser] = useState(localStorage.user ?? null);
  const [values, setValues] = useState(getInitialState());

  const updateState = useCallback((newState: any) => {
    setValues((prevState) => {
      return { ...prevState, ...newState }
    })
  }, [])

  const setState = useCallback((newState: any) => {
    setValues(newState);
  }, []);

  const resetState = useCallback(() => {
    setValues(emptyState);
  }, []);

  return <AuthContext.Provider value={{
    ...values,
    updateState,
    setState,
    resetState,
  }}>
    {children}
  </AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('The hook useAuth must be used inside the AuthProvider')
  }

  return context;
}