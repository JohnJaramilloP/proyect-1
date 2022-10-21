import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";
import { checkUrl, loginRefresh } from "../home/components/servicesCases";


const PrivateRoute = ({ children }) => {

  const {auth, handleAuth} = useContext(AuthContext)

  function checkUrlPrivate() {
    return checkUrl(auth.tokken, window.location.pathname.replace("/",""))
      .then(res => {
        if (res.length === 0) {
          return false;
        } else {
          return true;
        }
    });
  }

  function getToken() {
    if (auth.tokken !== '') {
      return checkUrlPrivate() ? auth.login : false;
    } else if (auth.tokken === '') {
      loginRefresh().then((res) => {
        if (!!res.response && res.response.status === 406) {
          handleAuth(false, '');
          <Navigate to="/auth/login" />;
        }
        if (res.accessToken) {
          handleAuth(true, res.accessToken);
          return checkUrlPrivate() ? auth.login : false;
        } 
      });

    }
    
  }

  return getToken() ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute