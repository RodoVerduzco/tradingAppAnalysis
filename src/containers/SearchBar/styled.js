import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    borderRadius: '1.5rem',
    backgroundColor: '#1A202B',
    color: '#545C6A',
    flexGrow: 1,
    paddingTop: '0.3rem !important',
    paddingBottom: '0.3rem !important',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0rem !important',
      paddingBottom: '0rem !important',
      fontSize: '12px',
      paddingRight: '0.6rem',
    },
  },
  searchIcon: {
    color: 'white',
    marginLeft: '0.75rem !important',
    marginRight: '0.75rem !important',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.25rem !important',
      marginRight: '0.25rem !important',
    },
  },
  searchIconButton: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0.4rem !important',
      paddingRight: '0.4rem !important',
      paddingTop: '0.4rem',
      paddingBottom: '0.4rem',
    },
  },
}));

export { useStyles };
