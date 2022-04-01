import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext<any | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [errorHandle, setError] = useState<Object>();

  const signUp = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('user has been added to database');
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        sessionStorage.setItem('user', JSON.stringify(currentUser));
        console.log('user has been logged in');
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logOut = async (email: string, password: string) => {
    return signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        console.log('user has been loged out');
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    errorHandle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
