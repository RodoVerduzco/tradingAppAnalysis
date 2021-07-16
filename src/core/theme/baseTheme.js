import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useBaseTheme = makeStyles((theme) => ({
  root: { display: 'flex', overflowY: 'none !important' },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: '#1A202B',
    position: 'absolute',
    top: '0vh',
    left: `${drawerWidth}px`,
    bottom: '0px',
    right: '0px',
    zIndex: '-999999999',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export { useBaseTheme, drawerWidth };
