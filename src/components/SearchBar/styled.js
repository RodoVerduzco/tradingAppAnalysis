import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchBar: {
    borderRadius: '1.5rem',
    backgroundColor: '#1A202B',
    color: '#545C6A',
    paddingTop: '0.3rem !important',
    paddingBottom: '0.3rem !important',
    flexGrow: 1,
  },
  searchIcon: {
    color: 'white',
    marginLeft: '0.75rem !important',
    marginRight: '0.75rem !important',
  },
}));

export { useStyles };
