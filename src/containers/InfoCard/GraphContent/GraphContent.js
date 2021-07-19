import React from 'react';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';

const GraphContent = ({ isExpanded }) => {
  return (
    <Collapse in={isExpanded} unmountOnExit>
      test
    </Collapse>
  );
};

GraphContent.propTypes = {
  isExpanded: PropTypes.bool,
};

export default GraphContent;
