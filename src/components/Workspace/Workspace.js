import React from 'react';

import clsx from 'clsx';

import { useBaseTheme } from '../../core/theme/baseTheme';

const Workspace = () => {
  const classes = useBaseTheme();
  console.log(classes);

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
