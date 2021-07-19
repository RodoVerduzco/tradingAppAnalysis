import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './styled';
import CardHeader from './CardHeader/CardHeader';
import GraphContent from './GraphContent/GraphContent';

const InfoCard = ({ info }) => {
  const classes = useStyles();
  const [expandedCard, setExpandedCard] = useState(true);
  const [expandedGraph, setExpandedGraph] = useState(false);

  const handleExpandCard = () => setExpandedCard((prev) => !prev);
  const handleExpandGraph = () => setExpandedGraph((prev) => !prev);

  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        {...info.header}
        expandedButtons={{ expandedCard, expandedGraph }}
        handleExpandCard={handleExpandCard}
        handleExpandGraph={handleExpandGraph}
      />
      <CardContent handleExpan={handleExpandCard} isExpanded={expandedCard} />
      <GraphContent
        handleExpan={handleExpandGraph}
        isExpanded={expandedGraph}
      />
    </Card>
  );
};

InfoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default InfoCard;
