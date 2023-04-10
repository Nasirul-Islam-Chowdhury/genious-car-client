import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=> { return unsubscribe();}
    },[])
    const userSignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const facebookSignin = () => {
        return signInWithPopup(auth, facebookProvider);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userSignin,
        googleSignin,
        facebookSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;