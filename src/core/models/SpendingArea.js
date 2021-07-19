import { TITLE_CONSTANTS } from '../constants/cardConstants';

const getCardHeader = (data, title) => {
  let length = data.datos.length;
  let lastInfo = data.datos[length - 1];
  return {
    title: title,
    lastValue: lastInfo.dato,
    lastDate: lastInfo.fecha,
  };
};

const getCardContent = (title, header, spendingData, metadata) => {
  let change = 0;
  let length = spendingData.length;

  if (length >= 2) {
    let lastInfo = parseFloat(spendingData[length - 1].dato);
    let penultimateInfo = parseFloat(spendingData[length - 2].dato);
    change = ((lastInfo - penultimateInfo) / penultimateInfo) * 100;
  }

  return {
    serieId: metadata.idSerie,
    title: title,
    lastDate: header.lastDate,
    lastValue: header.lastValue,
    units: metadata.unidad,
    change: change.toFixed(2),
    startDate: metadata.fechaInicio,
    endDate: metadata.fechaFin,
    periodicity: metadata.periodicidad,
  };
};

const getGraphData = (data) => {
  return data.map((spendingData) => {
    let spendingDataValue = spendingData.dato.replaceAll(/,/g, '');
    return {
      label: spendingData.fecha,
      value: parseFloat(spendingDataValue),
    };
  });
};

const getSpendingArea = (data, metadata) => {
  console.log(data.idSerie, metadata.idSerie);
  if (data.idSerie == metadata.idSerie) {
    const title = TITLE_CONSTANTS[data.idSerie];

    console.log(data.datos);
    const graphData = getGraphData(data.datos);
    console.log(graphData);
    const header = getCardHeader(data, title);
    const content = getCardContent(title, header, data.datos, metadata);

    return {
      header: header,
      content: content,
      graphData: graphData,
    };
  } else {
    console.log('not same');
  }

  console.log(data);
  console.log(metadata);
};
/*
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

*/

export default getSpendingArea;
