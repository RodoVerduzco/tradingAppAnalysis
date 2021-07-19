import PercentChange from '../../../components/PercentChange/PercentChange';

const cardContentElements = {
  serieId: {
    label: 'Serie ID',
  },
  title: {
    label: 'Título',
  },
  lastDate: { label: 'Última Fecha' },
  lastValue: { label: 'Último Valor' },
  units: { label: 'Unidad' },
  change: {
    label: 'Cambio Porcentual',
    design: PercentChange,
  },
  startDate: { label: 'Fecha Inicio' },
  endDate: { label: 'Fecha Fin' },
  periodicity: { label: 'Periodicidad' },
};

const getCardContentElementFormat = (label, value) => {
  const element = cardContentElements[label];
  let formattedValue;

  if (element.design) {
    let DataDesign = element.design;
    formattedValue = DataDesign(value);
  } else {
    formattedValue = value;
  }

  return {
    label: element.label,
    value: formattedValue,
  };
};

export { getCardContentElementFormat };
