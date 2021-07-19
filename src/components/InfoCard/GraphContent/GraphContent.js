import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import LineGraph from '../../../containers/Graphs/LineGraph/LineGraph';

const getGraphLabels = (data) => data.map((element) => element.label);
const getGraphValues = (data) => data.map((element) => element.value);

const GraphContent = ({ isExpanded, data }) => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const foundLabels = getGraphLabels(data);
    const foundValues = getGraphValues(data);
    setLabels(foundLabels);
    setValues(foundValues);
  }, [data]);

  return (
    <Collapse in={isExpanded} unmountOnExit>
      <LineGraph labelTitle="Valor (MDP)" labels={labels} data={values} />
    </Collapse>
  );
};

GraphContent.propTypes = {
  isExpanded: PropTypes.bool,
  data: PropTypes.array,
};

GraphContent.defaultProps = {
  data: [],
};

export default GraphContent;
