import {
  PermDataSetting,
  FindInPage,
  Group,
  GroupAdd,
  LogoutOutlined,
  PersonPinCircle,
  PeopleOutline,
  BusinessCenter,
  MenuOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import superAdmin from "../../assets/images/admin-sinfondo.png";
import estudent from "../../assets/images/estudent.png";
import lawyer from "../../assets/images/lawyer.png";
import AuthContext from "../../auth/context/AuthContext";
import "./SideBar.css";

const { menuOptions } = require("../components/servicesCases.js");

export const SideBar = ({
  valueSideBarHidden,
  handleDrawerOpen,
  drawerWidth,
  handleClose,
}) => {
  const navigate = useNavigate();

  const { auth, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    menuOptions(auth.tokken).then((res) => {
      let options = res[0].roleId;
      handleAuth(true, auth.tokken);
      localStorage.setItem("role", options);
    });
  }, []);

  const handleBacklogin = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("role", "");
    localStorage.setItem("lastPath", "/auth/login");
    handleAuth(false, "");
    navigate("/auth/login");
  };

  const roleId = localStorage.getItem("role");

  let options =
    roleId === "1"
      ? ["Casos_Recepcionados", "Casos_Asignados", "Personas"]
      : roleId === "2"
      ? ["Casos_Asignados_asesor", "Estudiantes_Asesor"]
      : roleId === "3"
      ? ["Casos", "Estudiantes", "Asesores", "Personas", "Configuracion"]
      : "";

  console.log("sidebar role", roleId);

  return (
    <Box
      component="nav"
      sx={{
        width: { xs: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="persistent"
        anchor="left"
        open={valueSideBarHidden}
        sx={{
          display: { sm: "block" },

          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Grid
          component="div"
          sx={{
            background: "#D9D9D9",
            // color: "#ffffff",
            height: "100vh",
          }}
        >
          <Toolbar
            sx={{
              height: 80,
            }}
          >
            <div className="menuIcon">
              <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2 }}
                onClick={() => (handleDrawerOpen(), handleClose())}
              >
                <MenuOutlined />
              </IconButton>
            </div>
            <Typography variant="h6" noWrap component="div">
              Consultorio Jurídico
            </Typography>
          </Toolbar>

          <Divider />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              pl: 2,
            }}
          >
            {roleId === "3" && (
              <ImageListItem
                variant="standard"
                sx={{
                  width: { xs: 160, md: 180 },
                  margin: "20px auto",
                }}
              >
                <img src={superAdmin} alt="super-admin" />
              </ImageListItem>
            )}

            {roleId === "2" && (
              <ImageListItem
                variant="standard"
                sx={{
                  width: { xs: 90, md: 110 },
                  margin: "20px auto",
                }}
              >
                <img src={lawyer} alt="super-admin" />
              </ImageListItem>
            )}

            {roleId === "1" && (
              <ImageListItem
                variant="standard"
                sx={{
                  width: { xs: 100, md: 120 },
                  margin: "20px auto",
                }}
              >
                <img src={estudent} alt="super-admin" />
              </ImageListItem>
            )}

            <Tooltip title="Cerrar Sesión">
              <Button onClick={handleBacklogin}>
                <IconButton color="error">
                  <LogoutOutlined />
                </IconButton>
              </Button>
            </Tooltip>
          </Grid>

          <List>
            {!!options &&
              options.map((text) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{
                    height: "10vh",
                  }}
                >
                  <NavLink
                    className="nav-item"
                    to={text}
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <ListItemButton
                      name={text}
                      onClick={() => (handleDrawerOpen(), handleClose())}
                      sx={{
                        display: { xs: "flex" },
                        fontSize: "bold",
                      }}
                    >
                      <ListItemIcon
                      // sx={{
                      //   color: "#ffffff"
                      // }}
                      >
                        {text === "Casos" && <FindInPage />}
                        {text === "Estudiantes" && <Group />}
                        {text === "Estudiantes_Asesor" && <Group />}
                        {text === "Casos_Recepcionados" && <PeopleOutline />}
                        {text === "Casos_Asignados" && <BusinessCenter />}
                        {text === "Casos_Asignados_asesor" && (
                          <BusinessCenter />
                        )}
                        {text === "Asesores" && <PersonPinCircle />}
                        {text === "Personas" && <GroupAdd />}
                        {text === "Configuracion" && <PermDataSetting />}
                      </ListItemIcon>
                      <Grid container>
                        <ListItemText
                          primary={
                            text === "Casos_Recepcionados"
                              ? "Casos Recepcionados"
                              : text === "Casos_Asignados"
                              ? "Casos Asignados"
                              : text === "Casos_Asignados_asesor"
                              ? "Casos Asignados"
                              : text === "Estudiantes_Asesor"
                              ? "Estudiantes"
                              : text === "Configuracion"
                              ? "Configuración"
                              : text
                          }
                        />
                      </Grid>
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
          </List>
        </Grid>
      </Drawer>
    </Box>
  );
};
