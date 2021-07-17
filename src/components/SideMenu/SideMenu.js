import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

import { useSideBar } from '../../core/contexts/SideBarContext';
import logo from '../../assets/logo.png';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SideMenuList from './SideMenuList/SideMenuList';
import { useStyles } from './styled';

const SideMenu = () => {
  const classes = useStyles();
  const drawer = useSideBar();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawer,
        [classes.drawerClose]: !drawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawer,
          [classes.drawerClose]: !drawer,
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
