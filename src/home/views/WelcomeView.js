import { WorkSharp } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../auth/context/AuthContext";

const { loginRefresh } = require("../components/servicesCases");

export const WelcomeView = () => {

  useEffect(() => {
    loginRefresh().then( res => {
      if (res.accessToken) {
        console.log("resfresh", res.accessToken)
      handleAuth(true, res.accessToken)
      }
    })
  }, []);

  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minWidth: {xs: "90vw", sm: "200px"}, minHeight: "calc(100vh - 110px)", backgroundColor: "secondary.main", borderRadius: 5 }}
    >
      <Grid item xs={ 12 }>
        <WorkSharp sx={{ fontSize: 100, color: "#fff"}} />
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color="#fff" variant="h5">Bienvenido a tu Plataforma: Consultorio Jurídico</Typography>
      </Grid>
    </Grid>
  );
};
