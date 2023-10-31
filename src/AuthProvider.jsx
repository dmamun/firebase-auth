import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./Firebase.config";

 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authentication={
        createUser,
        signIn,
    }
    
    return (
        <AuthContext.Provider value={authentication}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;