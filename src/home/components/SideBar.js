import { PermDataSetting, FindInPage, Group, GroupAdd, LogoutOutlined, PersonPinCircle } from "@mui/icons-material";
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
import superAdmin from "../../assets/images/super-admin.jpeg";

export const SideBar = ({
  valueSideBarHidden,
  handleDrawerOpen,
  drawerWidth,
  handleClose
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
        flexShrink: { sm: 0 }
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
            backgroundColor: "secondary.main",
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
              "Estudiantes",
              "Asesores",
              "Personas",
              "Configuracion"
            ].map((text) => (
              <ListItem 
                key={text} disablePadding
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
                    fontSize: "bold"
                  }}
                >
                  <ListItemIcon>
                    {text === "Casos" && <FindInPage />}
                    {text === "Estudiantes" && <Group />}
                    {text === "Asesores" && <PersonPinCircle />}
                    {text === "Personas" && <GroupAdd />}
                    {text === "Configuracion" && <PermDataSetting />}
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
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
              mt: 2,
              pl: 1,
            }}
          >
            <ImageListItem
              variant="standard"
              sx={{
                width: { xs: 160, md: 180 },
                mr: 2,
                mb: 2,
              }}
            >
              <img src={superAdmin} alt="super-admin" />
            </ImageListItem>
            <Button
            onClick={handleBacklogin}
            >
            <IconButton
             color="error"
             >
              <LogoutOutlined />
            </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};
