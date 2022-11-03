import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { Principal } from "../home/pages/Principal";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AuthContext from "../auth/context/AuthContext";
import Swal from "sweetalert2";

const { checkUrl } = require("../home/components/servicesCases");

export const AppRouter = () => {
  const { auth, handleAuth } = useContext(AuthContext);

  // checkUrl(auth.tokken, window.location.pathname.replace("/", "")).then();

  const { pathname } = useLocation();

  const lastPath = pathname;

  const role = localStorage.getItem("role")

  useEffect(() => {
    if (pathname !== "/auth/login") {
      localStorage.setItem("lastPath", lastPath);
    }
  }, [lastPath]);

  window.onbeforeunload = closeWindow;

  function closeWindow() {
    localStorage.setItem("login", false);
    localStorage.setItem("role", "");
    localStorage.setItem("lastPath", lastPath);
    handleAuth(false, "");
  }

  window.onpopstate = backOnWindow;

  function backOnWindow() {
    let path = localStorage.getItem("lastPath");
    console.log("atras uht login", path)
    if (role === "") {
      console.log("atras uht login")
      localStorage.setItem("login", false);
      localStorage.setItem("role", "");
      localStorage.setItem("lastPath", "/auth/login");
      handleAuth(false, "");
    }
  }

  return (
    <div>
      <Routes>
        {/* Login y registro */}

        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRoutes />
            </PublicRoute>
          }
        />

        {/* ´Principal */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Principal />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
