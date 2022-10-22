import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';


// export write must
export const AuthContext = createContext();


const auth = getAuth(app); //5.google method-01 > [5.thke setup start]

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Mr. Matas Khan' }; //initial check
    // console.log(user);
    const [user, setUser] = useState(null); //Third Step... Now we use useState and onAuthStateChanged and ingore initial
    const [loading, setLoading] = useState(true);


    // 5.google method-02 createContext..[for Next we useConyext]
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Five Step2:: reg form make btstrp thke then amra > Password Authen jabo
    const createUser = (eamil, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, eamil, password)
    }
    // Six
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user from firebase > Manage user
    const updtaeUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //email verification from Firebase> Mange Users
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Foruth Step:: >Google
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Third Step1:: >Manage users er first setup
    // its called observe--ei kaj sesh reg form make btstrp thke then amra > Password Authen jabo
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside auth state change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    // 5.google method-03 
    //eikhne providerLoginGoogle useContext use korer jonno entry kora
    //kaj sesh eiber jei file a ba button useContext use korbo ekhne onClick set kore handler er maddhome use korbo
    const authInfo = {
        user,
        loading,
        providerLogin,
        logOut,
        createUser,
        signIn,
        updtaeUserProfile,
        verifyEmail,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;