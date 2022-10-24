import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";


const PublicRoute = ({ children }) => {

  const {auth, handleAuth} = useContext(AuthContext)

  return children
}

export default PublicRoute