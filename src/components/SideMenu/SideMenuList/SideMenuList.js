import React from 'react';

import CircleIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { useStyles, NavItem } from './styled';
import NAVIGATION_PAGES from '../../../core/constants/navConstants';

const NavItems = ({ selectedPage }) => {
  return NAVIGATION_PAGES.map((element, i) => (
    <NavItem
      button
      selected={i === selectedPage}
      key={`drawerOption-${element.redirection}`}
      color={element.color}
      // onClick={() => {}}
    >
      <ListItemIcon>
        <CircleIcon style={{ color: element.color }} />
      </ListItemIcon>
      {element.title.toUpperCase()}
    </NavItem>
  ));
};

const SideMenuList = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.sideMenuList}>
      <NavItems selectedPage={2} />
    </List>
  );
};

export default SideMenuList;
