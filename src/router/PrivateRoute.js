import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";
import { checkUrl, loginRefresh } from "../home/components/servicesCases";

const PrivateRoute = ({ children }) => {
  const { auth, handleAuth } = useContext(AuthContext);

  const paht = localStorage.getItem("lastPath")

  function getToken() {
    if (auth.tokken !== "") {
      return auth.login;
    } else if (auth.tokken === "") {
      loginRefresh().then((res) => {
        if (!!res.response && res.response.status === 406) {
          handleAuth(false, "");
          <Navigate to="/auth/login" />;
        }
        if (res.accessToken) {
          handleAuth(true, res.accessToken);
          return auth.login;
        }
      });
    }
  }

  return getToken() ? children : <Navigate to={paht} />;

  // return children;
};

export default PrivateRoute;
