import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  ImageListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  BalanceSharp,
  LogoutOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import logoTec from "../../assets/images/logo-sinfondo.png";
import logoTec2 from "../../assets/images/logo-sinfondo.png";

export const NavBar = ({
  drawerWidth = 240,
  handleDrawerOpen,
  handleClose,
  valueSideBarHidden,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        // background: "#ffffff",
        height: 70,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={() => (handleDrawerOpen(), handleClose())}
          >
            <MenuOutlined />
          </IconButton>
          <Grid
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BalanceSharp sx={{ mr: 1 }} />
            <Typography
              sx={{
                width: { xs: 150, md: 240, lg: 380 },
                fontSize: { xs: 14, md: 20 },
              }}
              variant="h6"
              component="div"
            >
              Consultorio Jurídico: Sofía Mejía López
            </Typography>
          </Grid>
          <Grid
            variant="div"
            sx={{
              height: "100%",
              display: "flex",
            }}
          >
            <ImageListItem
              variant="standard"
              sx={{
                width: { md: 260 },
                display: { xs: "none", md: "block" },
                mr: 2,
              }}
            >
              <img src={logoTec} alt="Logo-Tec" />
            </ImageListItem>
            <ImageListItem
              variant="standard"
              sx={{
                width: { xs: 50, sm: 70 },
                display: { xs: "block", md: "none" },
                mr: 2,
              }}
            >
              <img src={logoTec2} alt="Logo-Tec-2" />
            </ImageListItem>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
