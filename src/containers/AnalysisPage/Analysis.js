import React, { useEffect, useState } from 'react';

import { Paper, Typography } from '@material-ui/core';

import { useStyles } from './styled';
import AppContainer from '../../components/AppContainer/AppContainer';
// import CapitalExpensesCard from '../CapitalExpensesCard/CapitalExpensesCard';
import {
  getSeries,
  getSeriesMetadata,
} from '../../core/adapters/AnalysisRequests';
import convertToSpendingArea from '../../core/models/SpendingArea';
import InfoCard from '../../components/InfoCard/InfoCard';

const AnalysisPage = () => {
  const classes = useStyles();

  const [seriesData, setSeriesData] = useState([]);

  const getSpendingAreas = (dataResponse, metadataResponse) => {
    let data = dataResponse?.bmx?.series;
    let metadata = metadataResponse?.bmx?.series;
    let spendingAreas = [];

    if (!data || !metadata || data.length !== metadata.length) {
      return [];
    }

    console.log(data, metadata);
    for (let i = 0; i < data.length; i++) {
      spendingAreas.push(convertToSpendingArea(data[i], metadata[i]));
    }

    return spendingAreas;
  };
  useEffect(() => {
    let series = [
      'SG46',
      //'SG47',
      // 'SG44',
      // 'SG71',
      //'SG73',
      // 'SG74',
      // 'SG48',
      // 'SG49',
      // 'SG69',
      // 'SG52',
      // 'SG75',
      // 'SG76',
      // 'SG53',
      // 'SG42',
      // 'SG45',
      // 'SG72',
    ];

    let startDate = '2019-01-01';
    let endDate = '2021-02-01';
    Promise.all([
      getSeries(series, startDate, endDate),
      getSeriesMetadata(series),
    ]).then((values) => {
      let spendingAreas = getSpendingAreas(...values);
      console.log(spendingAreas);
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
          {/* <CapitalExpensesCard /> */}
          {seriesData.map((series, i) => (
            <InfoCard info={series} key={'series-' + i} />
          ))}
        </Paper>
      </Paper>
    </AppContainer>
  );
};

export default AnalysisPage;
