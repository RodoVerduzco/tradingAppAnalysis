import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  topContainer: {
    marginTop: '2rem',
    marginBottom: '4rem',
    background: '#202837',
  },
  topContainerTitle: {
    fontTransform: 'none',
    fontSize: '22px',
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    marginLeft: '1rem',
  },
  cardContainer: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    background: '#2D3748',
    flex: '1 1 auto',
  },
}));

export { useStyles };
