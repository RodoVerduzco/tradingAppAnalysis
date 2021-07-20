import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle/PageTitle';
import { useSideBar } from '../../core/contexts/SideBarContext';
import { useBaseTheme } from '../../core/theme/baseTheme';
import { Hidden } from '@material-ui/core';
import { useTableMenu } from '../../core/contexts/TableMenuContext';

const AppContainer = ({ children }) => {
  const classes = useBaseTheme();
  const drawer = useSideBar();
  const tableMenu = useTableMenu();

  console.log(tableMenu.index);
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawer,
        [classes.contentShiftLeft]: tableMenu.index != -1,
      })}
    >
      <div className={classes.drawerHeader} />
      <Scrollbars style={{}}>
        <Container maxWidth="xl">
          <Hidden smDown>
            <PageTitle />
          </Hidden>
          <Grid>{children}</Grid>
        </Container>
      </Scrollbars>
    </main>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
