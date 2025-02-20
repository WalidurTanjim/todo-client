import { createContext, useEffect, useState } from "react"
import appAuth from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const auth = appAuth;
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // observer
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            console.log("Current user:", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        
        return () => {
            return unsubscriber();
        }
    }, []);

    const userInfo = {
        user, loading
    };

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}
