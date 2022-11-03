import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const { login, loginRefresh } = require("../../home/components/servicesCases");

export const LoginPage = () => {
  const [data, setData] = useState({ user: "", password: "" });

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const { auth, handleAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    login(data.user, data.password).then((res) => {
      if (res.accessToken) {
        handleAuth(true, res.accessToken)
          alert("success", "Acceso Concedido")
          navigate("/");
          localStorage.setItem("login", true);
      } else {
        alert("error", "Credenciales Inválidas");
      }
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log("hola", localStorage.getItem("lastPath"))

  return (
    <AuthLayout title="Iniciar Sesión">
      <form
      onSubmit={onLogin}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Usuario"
              type="text"
              placeholder="Usuario"
              fullWidth
              name="user"
              value={data.user}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
