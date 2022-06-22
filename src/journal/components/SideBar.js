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
import superAdmin from "../../assets/images/super-admin.jpeg";

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
              "Casos Antiguos",
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
                    {text === "Asesores" && <PersonPinCircle />}
                    {text === "Personas" && <GroupAdd />}
                    {text === "Casos Antiguos" && <HourglassEmpty />}
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
              <img src={superAdmin} alt="super-admin" />
            </ImageListItem>
            <IconButton color="error">
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};
