import React from 'react';

import InfoCard from '../InfoCard/InfoCard';

const baseCapitalExpenses = {
  header: {
    title: 'Gasto de Capital',
    lastValue: '23,252',
    lastDate: '21/05/2021',
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
