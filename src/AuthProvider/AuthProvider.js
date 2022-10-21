import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


// export write must
export const AuthContext = createContext();


const auth = getAuth(app); //5.google method-01 > [5.thke setup start]

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Mr. Matas Khan' }; //initial check
    // console.log(user);
    const [user, setUser] = useState(null); //Third Step... Now we use useState and onAuthStateChanged and ingore initial

    // 5.google method-02 createContext..[for Next we useConyext]
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // Five Step2:: reg form make btstrp thke then amra > Password Authen jabo
    const createUser = (eamil, password) => {
        return createUserWithEmailAndPassword(auth, eamil, password)
    }
    // Six
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Foruth Step:: >Google
    const logOut = () => {
        return signOut(auth);
    }

    // Third Step1:: >Manage users er first setup
    // its called observe--ei kaj sesh reg form make btstrp thke then amra > Password Authen jabo
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside auth state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    // 5.google method-03 
    //eikhne providerLoginGoogle useContext use korer jonno entry kora
    //kaj sesh eiber jei file a ba button useContext use korbo ekhne onClick set kore handler er maddhome use korbo
    const authInfo = { user, providerLogin, logOut, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;