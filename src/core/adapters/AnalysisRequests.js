import { get } from './requests';
import {
  BANXICO_API_URL,
  BANXICO_SERIES_ENDPOINT,
} from '../utils/Links/banxicoLinks';

const TOKEN = process.env.REACT_APP_BANXICO_TOKEN;

const getURLWithToken = (url) => {
  return `${url}?token=${TOKEN}`;
};

const getSeries = (series, startDate, endDate) => {
  const seriesToGet = series.join(',');
  const url = `${BANXICO_API_URL}${BANXICO_SERIES_ENDPOINT}/${seriesToGet}/datos/${startDate}/${endDate}`;
  const COMPLETE_URL = getURLWithToken(url);
  return get(COMPLETE_URL).json();
};

const getSeriesMetadata = (series) => {
  const seriesToGet = series.join(',');
  const url = `${BANXICO_API_URL}${BANXICO_SERIES_ENDPOINT}/${seriesToGet}`;
  const COMPLETE_URL = getURLWithToken(url);
  return get(COMPLETE_URL).json();
};

export { getSeries, getSeriesMetadata };
