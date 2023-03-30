import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//variable to create context objects allowing any component to access the data without needing to pass props manually
const AuthContext = createContext();

//function for authenication methods accessible in wrapped components
export function AuthContextProvider({ children }) {
  // user state set to an empty object
  const [user, setUser] = useState({});

  //sign up function with firebase authentication
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    // setDoc(doc(db, "users", email), {
    //   savedShows: [],
    // });
  }
  //login function with firebase authentication
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  //login function with firebase authentication
  function logOut() {
    return signOut(auth);
  }
  //useEffect hook to rerender user state when authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  //props being passed to children components in App
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
