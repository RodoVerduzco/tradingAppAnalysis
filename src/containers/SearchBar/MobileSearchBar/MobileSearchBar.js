import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from '../styled';

const MobileSearchBar = () => {
  const classes = useStyles();
  const [showBar, setShowBar] = useState(false);

  const handleSearchBar = () => setShowBar((prev) => !prev);

  const SearchIconButton = () => {
    return (
      <IconButton
        onClick={handleSearchBar}
        className={classes.searchIconButton}
      >
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    );
  };

  const SearchBar = () => {
    return (
      <Grow in={showBar} unmountOnExit>
        <Grid item xs={10}>
          <InputBase
            className={classes.searchBar}
            placeholder="Search"
            startAdornment={<SearchIconButton />}
          />
        </Grid>
      </Grow>
    );
  };

  return (
    <>
      <SearchBar />
      <Grow in={!showBar} unmountOnExit>
        <SearchIconButton />
      </Grow>
    </>
  );
};

export default MobileSearchBar;
