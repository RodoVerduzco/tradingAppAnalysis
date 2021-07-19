import React from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from '../styled';
import NotificationsIcon from '../NotificationIcon/NotificationIcon';
import Profile from '../Profile/Profile';
import SearchBar from '../../SearchBar/SearchBar';
import PageTitle from '../../../components/PageTitle/PageTitle';

const TopMenuCollapse = () => {
  const classes = useStyles();

  const BigMenu = () => (
    <>
      <SearchBar />

      <div className={classes.grow} />

      <IconButton edge="end">
        <SettingsIcon color="disabled" className={classes.topMenuIcon} />
      </IconButton>

      <NotificationsIcon />

      <div className={classes.separator} />
      <Profile />
    </>
  );

  const SmallMenu = () => (
    <>
      <PageTitle centered />
      <SearchBar />
    </>
  );
  return (
    <>
      <Hidden xsDown>
        <BigMenu />
      </Hidden>

      <Hidden smUp>
        <SmallMenu />
      </Hidden>
    </>
  );
};

export default TopMenuCollapse;
