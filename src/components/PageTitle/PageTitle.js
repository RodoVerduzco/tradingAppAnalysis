import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import NAVIGATION_PAGES from '../../core/constants/navConstants';
import { useHistory } from 'react-router-dom';
import { useBaseTheme } from '../../core/theme/baseTheme';

const PageTitle = ({ centered }) => {
  const classes = useBaseTheme();
  const history = useHistory();

  const currentPage = NAVIGATION_PAGES.find(
    (page) => page.redirection === history.location.pathname.substr(1)
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent={centered ? 'center' : null}
      alignItems="center"
    >
      <Grid item>
        <CircleIcon style={{ color: currentPage.color }} />
      </Grid>
      <Grid item>
        <Typography
          style={{ color: currentPage.color }}
          className={classes.pageTitle}
        >
          {currentPage.title.toUpperCase()}
        </Typography>
      </Grid>
    </Grid>
  );
};

PageTitle.propTypes = {
  centered: PropTypes.bool,
};

export default PageTitle;
