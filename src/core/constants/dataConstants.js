import moment from 'moment';

const TITLE_CONSTANTS = {
  SG46: 'Gasto total',
  SG47: 'Gasto programable',
  SG44: 'Gasto corriente',
  SG71: 'Servicios personales',
  SG73: 'Materiales y suministros',
  SG74: 'Servicios generales y otros',
  SG48: 'Gasto de capital',
  SG49: 'Inversión física',
  SG69: 'Inversión financiera',
  SG52: 'Subsidios y transferencias',
  SG75: 'SyT corrientes',
  SG76: 'SyT capital',
  SG53: 'Gasto no progamable',
  SG42: 'Participaciones',
  SG45: 'Adefas y otros',
  SG72: 'Costo financiero',
};

const SERIES = [
  'SG46',
  'SG47',
  'SG44',
  'SG71',
  'SG73',
  'SG74',
  'SG48',
  'SG49',
  'SG69',
  'SG52',
  'SG75',
  'SG76',
  'SG53',
  'SG42',
  'SG45',
  'SG72',
];

const START_DATE = '2019-01-01';
const END_DATE = moment().format('YYYY-MM-DD');
export { TITLE_CONSTANTS, SERIES, START_DATE, END_DATE };
