import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../auth/context/AuthContext';
import { NavBar, SideBar } from '../components';

export const JournalLayout = ({valueSideBar, setValueSideBar, valueSideBarHidden, setValueSideBarHidden, children}) => {
  
  const [drawerWidth, setDrawerWidth] = useState(240);  
  
  const handleDrawerOpen = () => {
    setValueSideBarHidden(!valueSideBarHidden);
  };

  const handleClose = () => {
    drawerWidth === 240 
    ? setDrawerWidth(0)
    : setDrawerWidth(240)
  }



  return (
    <Box sx={{ display: "flex"}}>

        <NavBar 
        drawerWidth={ drawerWidth }
        handleDrawerOpen={handleDrawerOpen}
        handleClose={handleClose}
        valueSideBarHidden={valueSideBarHidden}
        />
        <SideBar 
        drawerWidth={ drawerWidth }
        setValueSideBar={setValueSideBar}
        valueSideBarHidden={valueSideBarHidden}
        setValueSideBarHidden={setValueSideBarHidden}
        handleDrawerOpen={handleDrawerOpen}
        handleClose={handleClose}
         />

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3}}
        >
            <Toolbar />

            { children }

        </Box>

    </Box>
  )
}
