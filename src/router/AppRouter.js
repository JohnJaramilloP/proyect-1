import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Principal } from '../home/pages/Principal';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import axios from 'axios';
import AuthContext from '../auth/context/AuthContext';
import Swal from 'sweetalert2';

const { checkUrl } = require("../home/components/servicesCases");

export const AppRouter = () => {

//   const { auth, handleAuth } = useContext(AuthContext);

//   const alert = (icon, text) => {
//     Swal.fire({
//       icon: icon,
//       title: 'Oops...',
//       text: text,
//     })
//   };

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response) {
//       if (error.response.status === 401 ) {
//         // originalConfig._retry = true;
//         console.log("erorrr 402 interceptor")
//         loginRefresh().then( res => {
//           console.log("res token refresh", res)
//           handleAuth(true, res.accessToken)
//           alert("error", "Tu tiempo de inactividad ha superado lo estalecido, consulta de nuevo la información!!!")
//           if (!!res.response && res.response.status === 406) {
//             handleAuth(false, '');
//             <Navigate to="/auth/login" />;
//             console.log("error 406");
//             alert("error", "Tu tiempo de inactividad ha superado lo estalecido, accede de nuevo!!!")
//           }
//         })
//         // Do something, call refreshToken() request for example;
//         // return a request
//         // return axios_instance(config);
//       }

//       // if (error.response.status === ANOTHER_STATUS_CODE) {
//       //   // Do something 
//       //   return Promise.reject(error.response.data);
//       // }
//     }

//     return Promise.reject(error);
//   }
// );


  return (
    <div>
      <Routes>
        {/* Login y registro */}

        <Route path='/auth/*' element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
        />

        {/* ´Principal */}

        <Route path='/*' element={
          <PrivateRoute>
            <Principal/>
          </PrivateRoute>
        } />
    </Routes>
    </div>
  )
}
