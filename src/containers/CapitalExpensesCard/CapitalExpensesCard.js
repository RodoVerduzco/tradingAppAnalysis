import React from 'react';

import InfoCard from '../../components/InfoCard/InfoCard';

const baseCapitalExpenses = {
  header: {
    title: 'Gasto de Capital',
    lastValue: '23,252',
    lastDate: '21/05/2021',
  },
  content: {
    serieId: 'SG73',
    title: 'Materiales y suministros',
    lastDate: '01/02/2021',
    lastValue: '2,104.1',
    units: 'Millones de pesos',
    change: 146.9,
    startDate: '01/01/1977',
    endDate: '01/01/2021',
    periodicity: 'Mensual',
  },
  graphData: [
    {
      label: '01/01/2019',
      value: 166218.0,
    },
    {
      label: '01/02/2019',
      value: 287721.6,
    },
  ],
};

const CapitalExpensesCard = () => {
  return (
    <>
      <InfoCard info={baseCapitalExpenses} />
    </>
  );
};

export default CapitalExpensesCard;
