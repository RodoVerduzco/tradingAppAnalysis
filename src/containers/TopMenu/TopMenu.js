import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './styled';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import NotificationsIcon from './NotificationIcon/NotificationIcon';
import Profile from './Profile/Profile';
import SearchBar from '../../components/SearchBar/SearchBar';

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: true })}
    >
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon color="disabled" className={classes.topMenuIcon} />
        </IconButton>

        <SearchBar />

        <div className={classes.grow} />

        <IconButton edge="end">
          <SettingsIcon color="disabled" className={classes.topMenuIcon} />
        </IconButton>

        <NotificationsIcon />

        <div className={classes.separator} />

        <Profile />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
