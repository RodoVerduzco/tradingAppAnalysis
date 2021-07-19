import React from 'react';

import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useStyles } from './styled';

const LineGraph = ({ labelTitle, labels, data }) => {
  const classes = useStyles();

  const getTableData = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: labelTitle,
          data: data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
        },
      ],
    };
  };

  return (
    <div>
      <Line
        data={getTableData}
        options={{
          maintainAspectRatio: false,
          bezierCurve: false,
        }}
        className={classes.chart}
      />
    </div>
  );
};

LineGraph.propTypes = {
  labelTitle: PropTypes.string,
  labels: PropTypes.array,
  data: PropTypes.array,
};

LineGraph.defaultProps = {
  labelTitle: '',
  labels: [],
  data: [],
};

export default LineGraph;
