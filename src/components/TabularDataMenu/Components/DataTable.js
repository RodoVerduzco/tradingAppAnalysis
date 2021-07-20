import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { useStyles } from '../styled';

const DataTable = ({ rows }) => {
  const classes = useStyles();

  const DataRow = ({ rowData }) => {
    return (
      <>
        <Grid item xs={6}>
          <Typography className={classes.tableValue}>
            {rowData.label}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.tableValue}>
            {rowData.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Typography>
        </Grid>
      </>
    );
  };

  DataRow.propTypes = {
    rowData: PropTypes.object,
  };

  return (
    <>
      <Grid item xs={6}>
        <Typography className={classes.tableTitles}>Fecha</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.tableTitles}>Valor</Typography>
      </Grid>
      {rows.map((rowData, i) => (
        <DataRow rowData={rowData} key={`tableRow-${i}`} />
      ))}
      <div className={classes.space} />
    </>
  );
};

DataTable.propTypes = {
  rows: PropTypes.array,
};

DataTable.defaultProps = {
  rows: [],
};

export default DataTable;
