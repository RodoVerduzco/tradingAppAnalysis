import React from 'react';

import AppContainer from '../AppContainer/AppContainer';
import CapitalExpensesCard from '../../containers/CapitalExpensesCard/CapitalExpensesCard';
import { Paper, Typography } from '@material-ui/core';

import { useStyles } from './styled';

const AnalysisPage = () => {
  const classes = useStyles();

  return (
    <AppContainer>
      <Paper className={classes.topContainer}>
        <Typography className={classes.topContainerTitle}>
          Gasto Federal{' '}
        </Typography>
        <Paper className={classes.cardContainer}>
          <CapitalExpensesCard />
        </Paper>
      </Paper>
    </AppContainer>
  );
};

export default AnalysisPage;
