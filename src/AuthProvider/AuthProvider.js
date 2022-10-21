import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';


// export write must
export const AuthContext = createContext();

// 5.google method-01 > [5.thke setup start]
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // initial check
    // const user = { displayName: 'Mr. Matas Khan' };
    // console.log(user);

    // Third Step... Now we use useState and onAuthStateChanged and ingore initial
    const [user, setUser] = useState(null)

    // 5.google method-02 createContext..[for Next we useConyext]
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    // Third Step:: Manage users er first setup
    // its called observe
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
    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;