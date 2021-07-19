import { TITLE_CONSTANTS } from '../constants/dataConstants';
import { dataSort } from '../utils/data';

const getSpendingAreas = (dataResponse, metadataResponse) => {
  let data = dataResponse?.bmx?.series;
  let metadata = metadataResponse?.bmx?.series;
  let spendingAreas = [];

  if (!data || !metadata || data.length !== metadata.length) {
    return [];
  }

  data.sort(dataSort);

  metadata.sort((a, b) => {
    if (a.idSerie < b.idSerie) {
      return -1;
    }
    if (a.idSerie > b.idSerie) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < data.length; i++) {
    spendingAreas.push(getSpendingArea(data[i], metadata[i]));
  }

  return spendingAreas;
};

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
    console.log(spendingData);
    let lastInfo = spendingData[length - 1].value;
    let penultimateInfo = spendingData[length - 2].value;
    console.log(lastInfo, penultimateInfo);
    change = 100 * ((lastInfo - penultimateInfo) / penultimateInfo);
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
  if (data.idSerie == metadata.idSerie) {
    const title = TITLE_CONSTANTS[data.idSerie];
    const graphData = getGraphData(data.datos);
    const header = getCardHeader(data, title);
    const content = getCardContent(title, header, graphData, metadata);

    return {
      header: header,
      content: content,
      graphData: graphData,
    };
  } else {
    return null;
  }
};

export { getSpendingAreas };
