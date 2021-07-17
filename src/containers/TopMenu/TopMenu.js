import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './styled';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import TopMenuCollapse from './TopMenuCollapse/TopMenuCollapse';
import {
  useSideBar,
  useSideBarUpdate,
} from '../../core/contexts/SideBarContext';

const TopMenu = () => {
  const classes = useStyles();
  const drawer = useSideBar();
  const handleDrawer = useSideBarUpdate();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: drawer })}
    >
      <Toolbar>
        <IconButton edge="start" onClick={handleDrawer}>
          <MenuIcon color="disabled" className={classes.topMenuIcon} />
        </IconButton>

        <TopMenuCollapse />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
