import React from 'react';

import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

import { useStyles } from './styled';
import Title from './Components/Title';
import DataTable from './Components/DataTable';
import { useTableMenu } from '../../core/contexts/TableMenuContext';

const TabularDataMenu = () => {
  const classes = useStyles();
  const drawer = useTableMenu();

  return (
    <Drawer
      anchor="right"
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawer.index !== -1,
        [classes.drawerClose]: drawer.index === -1,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawer.index !== -1,
          [classes.drawerClose]: drawer.index === -1,
        }),
      }}
      PaperProps={{ className: classes.drawer }}
    >
      <Grid container direction="row" alignItems="center">
        <Title
          value={drawer.title}
          textClassName={classes.drawerTitle}
          iconClassName={classes.drawerTitleIcon}
          iconButtonClassName={classes.drawerTitleIconTutton}
        />
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        className={classes.dataTable}
      >
        <DataTable rows={drawer.data} />
      </Grid>
    </Drawer>
  );
};

export default TabularDataMenu;
