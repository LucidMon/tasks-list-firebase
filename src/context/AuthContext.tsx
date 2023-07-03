import React, { createContext, useContext, useState } from 'react'

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
    const [registerSucces, setRegisterSucces] = useState<boolean>(false);

    const register = async(email: string, password: string) => {
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            setRegisterSucces(true);
        } catch(error) {
            console.log(error)
            setRegisterSucces(false);
        }
    }

    const login = async(email: string, password: string) => {
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res)
        } catch(error) {
            console.log(error)
        }
    }

    const loginWithGoogle = async() => {
        try{
            const resGoogle = new GoogleAuthProvider()
            await signInWithPopup(auth, resGoogle)
        } catch(error) {
            console.log(error)
        }
    }

    const logout = async() => {
        const res = await signOut(auth)
        console.log(res);
    }

    return <authContext.Provider value = {{ register, login, loginWithGoogle, logout, registerSucces }}> { children } </authContext.Provider>
}