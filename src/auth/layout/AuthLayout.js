import { Grid, Typography } from "@mui/material";
import React from "react";
import imageBack from "../../assets/images/tec_a.jpg";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: `url(${imageBack})`,
        backgroundsize: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 100,
          background: "#00000060",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      />
      <Grid
        item
        className="box-shadow"
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          zIndex: 1000
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </div>
  );
};
