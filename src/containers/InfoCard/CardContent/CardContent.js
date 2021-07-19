import React from 'react';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { useStyles } from './styled';
import { getCardContentElementFormat } from '../../../core/utils/CardUtils/cardContent';

const CardContent = ({ isExpanded, cardData }) => {
  const classes = useStyles();

  const Data = () => {
    let cardContent = [];
    const size = Object.keys(cardData).length;
    let i = 0;

    for (const element in cardData) {
      const elementFormat = getCardContentElementFormat(
        element,
        cardData[element]
      );

      cardContent.push(
        <Grid item xs={'auto'} className={classes.dataDesign}>
          <Typography className={classes.title}>
            {elementFormat.label}
          </Typography>
          <Typography className={classes.data}>
            {elementFormat.value}
          </Typography>
        </Grid>
      );

      i++;

      if (i < size) {
        cardContent.push(<div className={classes.separator} />);
      }
    }

    return cardContent;
  };

  return (
    <Collapse in={isExpanded} unmountOnExit>
      <Grid direction="row" container>
        <Data />
      </Grid>
    </Collapse>
  );
};

CardContent.propTypes = {
  isExpanded: PropTypes.bool,
  cardData: PropTypes.object,
};

export default CardContent;
