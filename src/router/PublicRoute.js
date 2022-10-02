import { Navigate } from "react-router-dom";


const PublicRoute = ({ children }) => {

    const logged = false

  return logged ? <Navigate to="/Bienvenido" /> : children 
}

export default PublicRoute