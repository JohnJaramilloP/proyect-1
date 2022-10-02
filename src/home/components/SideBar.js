import {
  PermDataSetting,
  FindInPage,
  Group,
  GroupAdd,
  LogoutOutlined,
  PersonPinCircle,
  PeopleOutline,
  BusinessCenter
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
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import superAdmin from "../../assets/images/admin-sinfondo.png";

export const SideBar = ({
  valueSideBarHidden,
  handleDrawerOpen,
  drawerWidth,
  handleClose,
}) => {
  const navigate = useNavigate();

  const handleBacklogin = () => {
    navigate("/auth/login");
  };

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
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          </Toolbar>

          <Divider />

          <List>
            {[
              "Casos",
              "Casos_Recepcionados",
              "Casos_Asignados",
              "Casos_Asignados_asesor",
              "Estudiantes",
              "Estudiantes_asesor",
              "Asesores",
              "Personas",
              "Configuracion",
            ].map((text) => (
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
                    color: "#000000"
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
                      {text === "Estudiantes_asesor" && <Group />}
                      {text === "Casos_Recepcionados" && <PeopleOutline />}
                      {text === "Casos_Asignados" && <BusinessCenter />}
                      {text === "Casos_Asignados_asesor" && <BusinessCenter />}
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
                            : text === "Estudiantes_asesor"
                            ? "Estudiantes"
                            : text
                        }
                      />
                    </Grid>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              pl: 2,
            }}
          >
            <ImageListItem
              variant="standard"
              sx={{
                width: { xs: 140, md: 160 },
                mr: 2,
                mb: 2,
              }}
            >
              <img src={superAdmin} alt="super-admin" />
            </ImageListItem>
            <Button onClick={handleBacklogin}>
              <IconButton color="error">
                <LogoutOutlined />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};
