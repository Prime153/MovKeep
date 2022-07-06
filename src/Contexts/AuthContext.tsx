import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<any | null>(null);
const provider = new GoogleAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [errorHandle, setError] = useState<Object | undefined>();
  const history = useNavigate();

  // ! error handling to improve

  const clearError = (): void => {
    setTimeout(() => {
      setError(undefined);
    }, 3000);
  };

  const signUp = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.warn('user has been added to database');
      })
      .catch((error) => {
        setError(error);
        clearError();
      });
  };

  const logIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        sessionStorage.setItem('user', currentUser);
        console.warn('user has been logged in');
        history('/home');
        setError(undefined);
      })
      .catch((error) => {
        setError(error);
        clearError();
      });
  };

  const logOut = async (email: string, password: string) => {
    return signOut(auth)
      .then(() => {
        sessionStorage.removeItem('user');
        console.warn('user has been loged out');
      })
      .catch((error) => {
        setError(error);
        clearError();
      });
  };

  const logWithGoogle = async () => {
    return signInWithPopup(auth, provider)
      .then(() => {
        sessionStorage.setItem('user', currentUser);
        console.warn('user has been logged in through Google');
        history('/home');
        setError(undefined);
      })
      .catch((error) => {
        setError(error);
        clearError();
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
    logWithGoogle,
    errorHandle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
