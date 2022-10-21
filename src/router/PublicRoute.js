import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";


const PublicRoute = ({ children }) => {

  const {auth, handleAuth} = useContext(AuthContext)

  const path = localStorage.getItem("lastPath");
  const pathName = path ? path : "/Bienvenido";
  console.log("desde public", pathName)

    const logged = auth.login

  return auth.login ? <Navigate to={pathName} /> : children 
}

export default PublicRoute