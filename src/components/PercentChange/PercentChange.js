import React from 'react';

import PropTypes from 'prop-types';

import { useStyles } from './styled';

const PercentChange = (value) => {
  const classes = useStyles();

  if (value > 0) {
    return (
      <span className={classes.positive}>
        <span className={classes.positiveSign}>+</span>
        {value}%
      </span>
    );
  } else if (value < 0) {
    return (
      <span className={classes.negative}>
        <span className={classes.negativeSign}>-</span>
        {Math.abs(value)}%
      </span>
    );
  } else {
    return <span className={classes.neutral}>{value}%</span>;
  }
};

PercentChange.propTypes = {
  value: PropTypes.number,
};

PercentChange.defaultProps = {
  value: 0,
};

export default PercentChange;
