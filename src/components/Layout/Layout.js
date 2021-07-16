import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import TopMenu from '../../containers/TopMenu/TopMenu';
import PageRoutes from '../../containers/PageRoutes/PageRoutes';
import SideMenu from '../SideMenu/SideMenu';
import { useBaseTheme } from '../../core/theme/baseTheme';

const Layout = () => {
  const classes = useBaseTheme();

  return (
    <div className={classes.root}>
      <Router>
        <TopMenu />
        <SideMenu />
        <PageRoutes />
      </Router>
    </div>
  );
};

export default Layout;
