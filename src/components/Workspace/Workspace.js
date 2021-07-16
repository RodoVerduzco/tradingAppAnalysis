import React from 'react';

import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { useBaseTheme } from '../../core/theme/baseTheme';

const Workspace = () => {
  const classes = useBaseTheme();
  const history = useHistory();

  console.log(history);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: true,
      })}
    >
      <div className={classes.drawerHeader} />
      test
    </main>
  );
};

export default Workspace;
