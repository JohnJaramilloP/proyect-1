import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Home } from "./Home";
import { AuthProvider } from "./auth/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
       <Home />
     </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
