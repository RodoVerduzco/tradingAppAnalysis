import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Avatar, Typography } from '@material-ui/core';

import { useStyles } from './styled';

const ProfileInfo = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.profileInfo}
    >
      <Grid item md={12}>
        <Avatar className={classes.avatar}>TR</Avatar>
      </Grid>

      <Grid item md={12}>
        <Typography className={classes.name}>The Rock </Typography>
      </Grid>

      <Grid item md={12}>
        <Typography className={classes.email}>therock22@mxmarket.mx</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
