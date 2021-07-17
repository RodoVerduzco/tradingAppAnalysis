import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle/PageTitle';
import { useSideBar } from '../../core/contexts/SideBarContext';
import { useBaseTheme } from '../../core/theme/baseTheme';
import { Hidden } from '@material-ui/core';

const AppContainer = ({ children }) => {
  const classes = useBaseTheme();
  const drawer = useSideBar();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawer,
      })}
    >
      <div className={classes.drawerHeader} />
      <Container maxWidth="xl">
        <Hidden smDown>
          <PageTitle />
        </Hidden>
        <Grid>{children}</Grid>
      </Container>
    </main>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
