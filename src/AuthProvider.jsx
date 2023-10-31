import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";

 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
       return signOut(auth)
    }
    //onAuthStateChange
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log("current value of the current user",currentUser);
             setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }

    },[])
    const authentication={
        createUser,
        signIn,
        logOut,
        user
    }
    
    return (
        <AuthContext.Provider value={authentication}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;