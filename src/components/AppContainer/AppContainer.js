import React from 'react';

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
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
import { useError, useErrorUpdate } from '../../core/contexts/ErrorContext';

const AppContainer = ({ children }) => {
  const classes = useBaseTheme();
  const drawer = useSideBar();
  const tableMenu = useTableMenu();
  const error = useError();
  const errorUpdate = useErrorUpdate();

  const handleError = () => {
    errorUpdate({
      code: -1,
      title: '',
      text: '',
      show: false,
    });
  };

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawer,
        [classes.contentShiftLeft]: tableMenu.index != -1,
      })}
    >
      <div className={classes.drawerHeader} />
      <Scrollbars>
        <Container maxWidth="xl">
          <Hidden smDown>
            <PageTitle />
          </Hidden>
          <Grid>{children}</Grid>
          {error.show && (
            <Alert
              severity="error"
              onClose={handleError}
              style={{ bottom: 10, position: 'fixed', width: '90vw' }}
            >
              <AlertTitle>Error</AlertTitle>
              {error.code} — {error.text}
            </Alert>
          )}
        </Container>
      </Scrollbars>
    </main>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
