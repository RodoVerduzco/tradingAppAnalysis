import React from 'react';

import ListIcon from '@material-ui/icons/List';
import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {
  useTableMenu,
  useTableMenuUpdate,
} from '../../../core/contexts/TableMenuContext';

const Title = ({ value, iconClassName, textClassName }) => {
  const handleTableMenu = useTableMenuUpdate();
  const tableMenu = useTableMenu();

  const handleTablularMenu = () => {
    handleTableMenu(tableMenu);
  };

  return (
    <>
      <Grid item>
        <IconButton onClick={handleTablularMenu}>
          <ListIcon className={iconClassName} />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography className={textClassName}>{value}</Typography>
      </Grid>
    </>
  );
};

Title.propTypes = {
  value: PropTypes.string.isRequired,
  textClassName: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default Title;
