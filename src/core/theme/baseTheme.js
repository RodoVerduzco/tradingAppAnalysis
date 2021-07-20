import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useBaseTheme = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY: 'none !important',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth - theme.spacing(2),
    position: 'absolute',
    top: '0vh',
    left: `${drawerWidth}px`,
    bottom: '0px',
    right: '0px',
    zIndex: '-999999999',
    backgroundColor: '#1A202B',
  },
  contentShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      backgroundColor: '#1A202B',
    },
  },
  contentShiftLeft: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  pageTitle: {
    fontWeight: 'bold',
    marginLeft: '0.5rem',
    marginBlock: 'auto !important',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px !important',
    },
  },
}));

export { useBaseTheme, drawerWidth };
