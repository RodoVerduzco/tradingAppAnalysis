import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    color: 'white !important',
    marginTop: '1rem',
    marginBottom: '0.3rem',
    fontSize: '14px',
  },
  data: {
    color: 'white !important',
    fontFamily: 'Consolas,monaco,monospace',
    fontSize: '14px',
  },
  dataDesign: {
    marginRight: '1.2rem',
    marginLeft: '1.2rem',
  },
  separator: {
    height: 'auto',
    borderLeft: '1px solid #ffffff33',
    marginLeft: '0.3rem',
    marginRight: '0.3rem',
    marginTop: '1rem',
  },
}));

export { useStyles };
