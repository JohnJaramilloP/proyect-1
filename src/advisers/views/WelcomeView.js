import { WorkSharp } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const WelcomeView = () => {
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
