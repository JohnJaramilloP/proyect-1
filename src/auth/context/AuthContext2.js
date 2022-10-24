import { createContext, useEffect, useState } from "react";

const AuthContext2 = createContext();

const initialAuth = {location: ""};

const AuthProvider2 = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (location) => {
        setAuth({location: location});
    }
    const data = {auth, handleAuth}
    return <AuthContext2.Provider value={data}>{children}</AuthContext2.Provider>
}

export { AuthProvider2 };

export default AuthContext2;

