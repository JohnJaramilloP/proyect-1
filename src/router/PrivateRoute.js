import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

  const logged = true

  return logged ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute