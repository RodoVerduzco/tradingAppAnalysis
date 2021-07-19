import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  positiveSign: {
    color: '#42A56E',
  },
  positive: {
    background: '#42a56f41 !important',
    paddingLeft: '0.5rem',
    paddingRight: '0.2rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
  },
  negativeSign: {
    color: '#df3131',
  },
  negative: {
    background: '#a54e4241 !important',
    paddingLeft: '0.5rem',
    paddingRight: '0.2rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
  },
  neutral: {
    background: '#6e696988',
    paddingLeft: '0.5rem',
    paddingRight: '0.2rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
  },
}));

export { useStyles };
