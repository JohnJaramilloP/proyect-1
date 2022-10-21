import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialAuth = {login:false, tokken: ""};

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (login, tokken, role) => {
        setAuth({login:login, tokken:tokken, role: role});
    }
    const data = {auth, handleAuth}
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };

export default AuthContext;

