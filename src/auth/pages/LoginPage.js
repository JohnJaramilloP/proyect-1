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

  const onLogin = () => {
    login(data.user, data.password).then((res) => {
      console.log("reslogin", res)
      if (res.accessToken) {
        handleAuth(true, res.accessToken)
          alert("success", "Acceso concedido")
          navigate("/");
      } else {
        alert("error", "credenciales Inválidas");
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

  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
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
              <Button variant="contained" fullWidth onClick={onLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
