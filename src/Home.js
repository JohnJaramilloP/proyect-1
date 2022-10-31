import axios from "axios";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "./auth/context/AuthContext";
import { loginRefresh } from "./home/components/servicesCases";

import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const Home = () => {

  const { auth, handleAuth } = useContext(AuthContext);

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  axios.interceptors.response.use(
    (response) => {
      if (response.request.responseURL.includes('menu-options?url') && response.request.responseURL.split('url=')[1] !== '') {
        if (response.data.length == 0) {
          handleAuth(false, '');
          localStorage.setItem("lastPath", "/auth/login");
          localStorage.setItem("login", false);
          window.location.href = '/auth/login';
        }
      }
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response) {
        if (error.response.status === 401 ) {
          // originalConfig._retry = true;
          console.log("erorrr 401 interceptor")
          return loginRefresh().then( res => {
            if (!!res.response && res.response.status === 406) {
              localStorage.setItem("lastPath", "/auth/login");
              localStorage.setItem("login", false);
              handleAuth(false, '');
              <Navigate to="/auth/login" />;
              console.log("error 406");
              alert("error", "Tu tiempo de inactividad ha superado lo estalecido, accede de nuevo!!!")
            } else {
              console.log("res token refresh", res)
              handleAuth(true, res.accessToken)
              originalConfig.headers['Authorization'] = `Bearer ${res.accessToken}`;
              return axios.request(originalConfig)
            }
          })
        }
      }
  
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};
