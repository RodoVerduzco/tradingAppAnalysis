import React from 'react';

import CircleIcon from '@material-ui/icons/FiberManualRecord';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const LastValue = ({ value, circleClassName }) => {
  return (
    <>
      <Grid item>
        <CircleIcon className={circleClassName} />
      </Grid>
      <Grid item>
        <Typography>{value}</Typography>
      </Grid>
    </>
  );
};

LastValue.propTypes = {
  value: PropTypes.string.isRequired,
  circleClassName: PropTypes.string,
};

export default LastValue;
