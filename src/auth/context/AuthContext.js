import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialAuth = {login:false, tokken: ""};

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (login, tokken, role, location) => {
        setAuth({login:login, tokken:tokken});
    }
    const data = {auth, handleAuth}
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };

export default AuthContext;

