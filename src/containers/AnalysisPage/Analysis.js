import React, { useEffect, useState } from 'react';

import { Paper, Typography } from '@material-ui/core';

import { useStyles } from './styled';
import AppContainer from '../../components/AppContainer/AppContainer';
import InfoCard from '../../components/InfoCard/InfoCard';
import { getSpendingAreas } from '../../core/models/SpendingArea';
import TabularDataMenu from '../../components/TabularDataMenu/TabularDataMenu';
import {
  getSeries,
  getSeriesMetadata,
} from '../../core/adapters/AnalysisRequests';
import {
  SERIES,
  START_DATE,
  END_DATE,
} from '../../core/constants/dataConstants';

const AnalysisPage = () => {
  const classes = useStyles();

  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    Promise.all([
      getSeries(SERIES, START_DATE, END_DATE),
      getSeriesMetadata(SERIES),
    ]).then((values) => {
      const spendingAreas = getSpendingAreas(...values);
      setSeriesData(spendingAreas);
    });
  }, []);

  return (
    <AppContainer>
      <Paper className={classes.topContainer}>
        <Typography className={classes.topContainerTitle}>
          Gasto Federal{' '}
        </Typography>
        <Paper className={classes.cardContainer}>
          {seriesData.map((series, i) => (
            <InfoCard info={series} key={`series-${i}`} index={i} />
          ))}
        </Paper>
        <TabularDataMenu />
      </Paper>
    </AppContainer>
  );
};

export default AnalysisPage;
