import React from 'react';

import Avatar from '@material-ui/core/Avatar';

const ProfileAvatar = ({ image, name, className }) => {
  if (image) {
    return <Avatar src={image} className={className} />;
  } else {
    let letter = name ? name[0] : '';
    return <Avatar className={className}>{letter}</Avatar>;
  }
};

export default ProfileAvatar;
