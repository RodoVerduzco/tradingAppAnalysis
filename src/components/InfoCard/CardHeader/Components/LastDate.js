import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const LastDate = ({ date }) => {
  return <Typography>{date}</Typography>;
};

LastDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default LastDate;
