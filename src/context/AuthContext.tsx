import React, { createContext, useContext } from 'react'

import { auth } from '../firebase/firebase.config' 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


export const authContext = createContext<any>(null);

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context){
        console.log('error creating auth context');
    }
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const register = async(email: string, password: string) => {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
    }

    const login = async(email: string, password: string) => {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
    }

    const loginWithGoogle = async() => {
        const resGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, resGoogle)
    }

    const logout = async() => {
        const res = await signOut(auth)
        console.log(res);
    }

    return <authContext.Provider value = {{ register, login, loginWithGoogle, logout }}> { children } </authContext.Provider>
}