import React from 'react';

import InfoCard from '../InfoCard/InfoCard';

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
};

const CapitalExpensesCard = () => {
  return (
    <>
      <InfoCard info={baseCapitalExpenses} />
    </>
  );
};

export default CapitalExpensesCard;
