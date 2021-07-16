import React from 'react';

import TopMenu from '../../containers/TopMenu/TopMenu';
import PageRoutes from '../../containers/PageRoutes/PageRoutes';
import SideMenu from '../SideMenu/SideMenu';
import Workspace from '../Workspace/Workspace';

import { useBaseTheme } from '../../core/theme/baseTheme';

const Layout = () => {
  const classes = useBaseTheme();

  return (
    <div className={classes.root}>
      <TopMenu />
      <SideMenu />
      <PageRoutes />
      <Workspace />
    </div>
  );
};

export default Layout;
