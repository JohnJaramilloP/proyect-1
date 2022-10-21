import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";


const PublicRoute = ({ children }) => {

  const {auth, handleAuth} = useContext(AuthContext)

    const logged = auth.login

  return auth.login ? <Navigate to="/Bienvenido" /> : children 
}

export default PublicRoute