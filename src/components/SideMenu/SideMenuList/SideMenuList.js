import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { useStyles, NavItem } from './styled';
import NAVIGATION_PAGES from '../../../core/constants/navConstants';

const SideMenuList = () => {
  const classes = useStyles();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(history.location.pathname);

  const changePage = (page) => () => {
    setCurrentPage(page);
    history.push(page);
  };

  const NavItems = ({ selectedPage }) => {
    return NAVIGATION_PAGES.map((element) => {
      return (
        <NavItem
          button
          selected={selectedPage === element.redirection}
          key={`drawerOption-${element.redirection}`}
          color={element.color}
          onClick={changePage(element.redirection)}
        >
          <ListItemIcon>
            <CircleIcon style={{ color: element.color }} />
          </ListItemIcon>
          {element.title.toUpperCase()}
        </NavItem>
      );
    });
  };

  return (
    <List component="nav" className={classes.sideMenuList}>
      <NavItems selectedPage={currentPage} changePage={changePage} />
    </List>
  );
};

export default SideMenuList;
