import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography, Hidden } from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListIcon from '@material-ui/icons/List';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import HeaderButton from './Components/HeaderButton';
import LastValue from './Components/LastValue';
import LastDate from './Components/LastDate';
import { useStyles } from '../styled';
import GraphImage from '../../../assets/graph-img.png';
import { useTableMenu } from '../../../core/contexts/TableMenuContext';

const CardHeader = ({
  index,
  title,
  lastValue,
  lastDate,
  expandedButtons,
  handleExpandCard,
  handleExpandGraph,
  handleTableMenu,
}) => {
  const classes = useStyles();
  const tabularDrawer = useTableMenu();

  const ShowChart = () => (
    <HeaderButton
      icon={
        <ShowChartIcon
          className={clsx({
            [classes.infoButton]: !expandedButtons.expandedGraph,
            [classes.infoButtonClicked]: expandedButtons.expandedGraph,
          })}
        />
      }
      onClick={handleExpandGraph}
    />
  );

  console.log(tabularDrawer);
  const ShowTable = () => (
    <HeaderButton
      icon={
        <ListIcon
          className={clsx({
            [classes.infoButton]: tabularDrawer.index !== index,
            [classes.infoButtonClicked]: tabularDrawer.index === index,
          })}
        />
      }
      onClick={handleTableMenu}
    />
  );

  const DragCardButton = () => (
    <HeaderButton
      className={classes.marginLeftAuto}
      icon={<DragHandleIcon className={classes.cardButton} />}
    />
  );
  const OpenCloseCardButton = () => (
    <HeaderButton
      onClick={handleExpandCard}
      icon={
        <ExpandMoreIcon
          className={clsx(classes.cardButton, {
            [classes.rotatedButton]: !expandedButtons.expandedCard,
          })}
        />
      }
    />
  );

  return (
    <Grid
      container
      className={classes.cardHeader}
      alignContent="center"
      alignItems="center"
      direction="row"
    >
      <Grid item>
        <Typography className={classes.infoCardTitle}>{title} </Typography>
      </Grid>

      <Hidden xsDown>
        <div className={classes.separator} />
        <LastValue
          value={lastValue}
          circleClassName={classes.circleIndicator}
        />

        <div className={classes.separator} />
        <Grid item>
          <LastDate date={lastDate} />
        </Grid>

        <div className={classes.separator} />
        <img src={GraphImage} className={classes.graphImage} />
      </Hidden>

      <ShowChart />
      <ShowTable />

      <div className={classes.marginLeftAuto}>
        <Hidden xsDown>
          <DragCardButton />
        </Hidden>
        <OpenCloseCardButton />
      </div>
    </Grid>
  );
};

CardHeader.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  lastValue: PropTypes.string.isRequired,
  lastDate: PropTypes.string.isRequired,
  expandedButtons: PropTypes.object.isRequired,
  handleExpandCard: PropTypes.func.isRequired,
  handleExpandGraph: PropTypes.func.isRequired,
  handleTableMenu: PropTypes.func.isRequired,
};

CardHeader.defaultProps = {
  title: '',
};

export default CardHeader;
