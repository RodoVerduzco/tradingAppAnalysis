import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    color: 'white !important',
    background: '#202837',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  cardHeader: {
    background: 'black',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    display: 'flex',
  },
  infoCardTitle: {
    fontSize: '16px',
  },
  separator: {
    height: '1rem',
    borderLeft: '0.5px solid white',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  circleIndicator: {
    width: '1rem',
    marginEnd: '0.5rem',
  },
  graphImage: {
    height: '1.2rem',
    width: '4rem',
  },
  infoButton: {
    color: 'white',
    border: '1px solid white',
    margin: 0,
  },
  cardButton: {
    color: 'white',
    margin: 0,
  },
  iconButton: {
    padding: 0,
    paddingRight: '0.2rem',
  },
  rotatedButton: {
    transform: 'rotate(90deg)',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
    justifyContent: 'end',
  },
  infoButtonClicked: {
    color: 'black',
    background: 'white',
  },
}));

export { useStyles };
