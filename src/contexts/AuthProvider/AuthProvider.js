import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const VerifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            if (currentUser === null || user.emailVerified) {

                setUser(currentUser);

            }
            else (
                toast('Please verify your email first')
            )
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = { user, loading, providerLogin, updateUserProfile, LogOut, createUser, signin, VerifyEmail, setLoading };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;