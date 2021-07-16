import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileInfo: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #65676F',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
  },
  name: {
    transform: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '1rem',
  },
  email: {
    transform: 'none',
    fontSize: '14px',
    color: 'white',
    textAlign: 'center',
    marginTop: '0.1rem',
  },
}));

export { useStyles };
