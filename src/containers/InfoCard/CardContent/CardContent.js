import React from 'react';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';

const CardContent = ({ isExpanded }) => {
  return (
    <Collapse in={isExpanded} unmountOnExit>
      test
    </Collapse>
  );
};

CardContent.propTypes = {
  isExpanded: PropTypes.bool,
};

export default CardContent;
