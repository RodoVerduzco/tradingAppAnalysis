import React from 'react';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from '../../styled';

const HeaderButton = ({ icon, className, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={`${classes.iconButton} ${className}`}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default HeaderButton;
