import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import logo from '../../assets/logo.png';

import SideMenuList from './SideMenuList/SideMenuList';
import { useStyles } from './styled';

const SideMenu = () => {
  const classes = useStyles();
  const sideBar = { open: true };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: sideBar.open,
        [classes.drawerClose]: !sideBar.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: sideBar.open,
          [classes.drawerClose]: !sideBar.open,
        }),
      }}
      PaperProps={{ className: classes.drawer }}
    >
      <img src={logo} alt="home" className={classes.logo} />

      <ProfileInfo />
      <Divider />
      <SideMenuList />
    </Drawer>
  );
};

export default SideMenu;
