import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styled';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <InputBase
        className={classes.searchBar}
        startAdornment={<SearchIcon className={classes.searchIcon} />}
        placeholder="Search securities, transactions, info or help"
        inputProps={{ 'aria-label': 'naked' }}
        fullWidth
      />
    </Grid>
  );
};

export default SearchBar;
