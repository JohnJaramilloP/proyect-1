import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../auth/context/AuthContext";
import { checkUrl, loginRefresh } from "../components/servicesCases";
import { JournalLayout } from "../layout/JournalLayout";
import { HomeRoutes } from "../routes/HomeRoutes";
import axios from 'axios';
import Swal from 'sweetalert2';

export const Principal = () => {
  const [valueSideBarHidden, setValueSideBarHidden] = useState(true);
  const { auth, handleAuth } = useContext(AuthContext);

  const alert = (icon, text) => {
    Swal.fire({
      icon: icon,
      title: 'Oops...',
      text: text,
    })
  };

  useEffect(() => {
  
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalConfig = error.config;
        if (error.response) {
          if (error.response.status === 401 ) {
            // originalConfig._retry = true;
            console.log("erorrr 402 interceptor")
            return loginRefresh().then( res => {
              if (!!res.response && res.response.status === 406) {
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
            // Do something, call refreshToken() request for example;
            // return a request
            // return axios_instance(config);
          }
    
          // if (error.response.status === ANOTHER_STATUS_CODE) {
          //   // Do something 
          //   return Promise.reject(error.response.data);
          // }
        }
    
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <JournalLayout
      valueSideBarHidden={valueSideBarHidden}
      setValueSideBarHidden={setValueSideBarHidden}
    >
      <HomeRoutes />
    </JournalLayout>
  );
};
