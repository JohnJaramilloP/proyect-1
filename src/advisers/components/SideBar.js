import { FindInPage, Group, GroupAdd, HourglassEmpty, LogoutOutlined, PersonPinCircle } from "@mui/icons-material";
import {
  Box,
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
import { useNavigate } from "react-router-dom";
import Asesor from "../../assets/images/asesor.png";

export const SideBar = ({
  setValueSideBar,
  valueSideBarHidden,
  handleDrawerOpen,
  drawerWidth,
  handleClose
}) => {
  const onClickSideBar = (text) => {
    setValueSideBar(text);
  };

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
            ].map((text) => (
              <ListItem 
                key={text} disablePadding
                sx={{
                    height: "10vh",
                }}
                >
                <ListItemButton
                  name={text}
                  onClick={() => (onClickSideBar(text), handleDrawerOpen(), handleClose())}
                  sx={{
                    display: { xs: "flex" },
                  }}
                >
                  <ListItemIcon>
                    {text === "Casos" && <FindInPage />}
                    {text === "Estudiantes" && <Group />}
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                  </Grid>
                </ListItemButton>
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
              <img src={Asesor} alt="super-admin" />
            </ImageListItem>
            <IconButton
             color="error"
             onClick={handleBacklogin}
             >
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};
