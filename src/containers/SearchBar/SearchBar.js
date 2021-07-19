import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';

import { useStyles } from './styled';
import MobileSearchBar from './MobileSearchBar/MobileSearchBar';

const SearchBar = () => {
  const classes = useStyles();

  const NormalSearchBar = () => {
    return (
      <InputBase
        className={classes.searchBar}
        startAdornment={<SearchIcon className={classes.searchIcon} />}
        placeholder="Search securities, transactions, info or help"
        fullWidth
      />
    );
  };

  return (
    <>
      <Hidden smDown>
        <Grid item md={4}>
          <NormalSearchBar />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <MobileSearchBar />
      </Hidden>
    </>
  );
};

export default SearchBar;
