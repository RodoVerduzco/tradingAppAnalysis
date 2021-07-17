import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { useStyles } from './styled';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { useProfile } from '../../../core/contexts/ProfileContext';

const ProfileInfo = () => {
  const classes = useStyles();
  const profile = useProfile();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.profileInfo}
    >
      <Grid item md={12}>
        <ProfileAvatar
          className={classes.avatar}
          image={profile.image}
          name={profile.name}
        />
      </Grid>

      <Grid item md={12}>
        <Typography className={classes.name}>{profile.name}</Typography>
      </Grid>

      <Grid item md={12}>
        <Typography className={classes.email}>{profile.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
