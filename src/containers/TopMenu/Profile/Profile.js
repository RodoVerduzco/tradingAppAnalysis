import React from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Typography } from '@material-ui/core';

import { useStyles } from './styled';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { useProfile } from '../../../core/contexts/ProfileContext';

const Profile = () => {
  const classes = useStyles();
  const profile = useProfile();

  return (
    <Button
      className={classes.profileButton}
      endIcon={<ProfileAvatar image={profile.image} name={profile.name} />}
    >
      <Typography className={classes.text} variant="subtitle1">
        {profile.name}
      </Typography>
      <KeyboardArrowDownIcon className={classes.chevronIcon} />
    </Button>
  );
};

ProfileAvatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Profile;
