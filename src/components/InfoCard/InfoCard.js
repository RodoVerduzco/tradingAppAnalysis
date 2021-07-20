import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';

import { useStyles } from './styled';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import GraphContent from './GraphContent/GraphContent';
import { useTableMenuUpdate } from '../../core/contexts/TableMenuContext';

const InfoCard = ({ info, index }) => {
  const classes = useStyles();
  const handleTabularDrawer = useTableMenuUpdate();

  const [expandedCard, setExpandedCard] = useState(false);
  const [expandedGraph, setExpandedGraph] = useState(false);

  const handleExpandCard = () => setExpandedCard((prev) => !prev);
  const handleExpandGraph = () => setExpandedGraph((prev) => !prev);
  const handleTableMenu = () => {
    let data = {
      index: index,
      title: info.header.title,
      data: info.graphData,
    };
    handleTabularDrawer(data);
  };

  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        index={index}
        expandedButtons={{ expandedCard, expandedGraph }}
        handleExpandCard={handleExpandCard}
        handleExpandGraph={handleExpandGraph}
        handleTableMenu={handleTableMenu}
        {...info.header}
      />
      <CardContent isExpanded={expandedCard} cardData={info.content} />
      <GraphContent
        handleExpan={handleExpandGraph}
        isExpanded={expandedGraph}
        data={info.graphData}
      />
    </Card>
  );
};

InfoCard.propTypes = {
  info: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default InfoCard;
