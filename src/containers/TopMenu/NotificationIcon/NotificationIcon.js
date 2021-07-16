import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PropTypes from 'prop-types';

import { useStyles } from '../styled';

const NotificationsBadge = ({ children, count }) => {
  if (count > 0) {
    return (
      <Badge badgeContent={count} color="error">
        {children}
      </Badge>
    );
  } else {
    return children;
  }
};

const Notifications = () => {
  const classes = useStyles();

  const [notificationsCount, setNotificationsCount] = useState(0);

  useEffect(() => {
    // Retrieve Notification Count
    setNotificationsCount(Math.floor(Math.random(0) * 9));
  }, []);

  return (
    <IconButton edge="end">
      <NotificationsBadge count={notificationsCount}>
        <NotificationsIcon color="disabled" className={classes.topMenuIcon} />
      </NotificationsBadge>
    </IconButton>
  );
};

NotificationsBadge.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
};

export default Notifications;
