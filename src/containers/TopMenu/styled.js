import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from '../../core/theme/baseTheme';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0D0D0D',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '6vh',
  },
  topMenuIcon: {
    color: 'white !important',
  },
  separator: {
    height: '2rem',
    borderLeft: '1px solid white',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  grow: {
    flexGrow: 1,
  },
}));

export { useStyles };
