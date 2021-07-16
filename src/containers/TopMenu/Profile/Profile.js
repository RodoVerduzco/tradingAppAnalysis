import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Typography } from '@material-ui/core';
import { useStyles } from './styled';

const ProfileAvatar = ({ image, name }) => {
  if (image) {
    return <Avatar src={image} />;
  } else {
    let letter = name ? name[0] : '';
    return <Avatar>{letter}</Avatar>;
  }
};

const Profile = () => {
  const classes = useStyles();

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    // Retrieve Info
    setProfileImage(
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
    );
    setName('The Rock');
  });

  return (
    <Button endIcon={<ProfileAvatar image={profileImage} name={name} />}>
      <Typography className={classes.text} variant="subtitle1">
        {name}
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
