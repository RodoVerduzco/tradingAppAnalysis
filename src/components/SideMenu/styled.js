import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from '../../core/theme/baseTheme';

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#000000 !important',
    flexShrink: 0,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      top: theme.mixins.toolbar.minHeight + 1,
    },
  },
  drawerClose: {
    background: '#000000 !important',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '0px !important',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  logo: {
    borderBottom: '1px solid white',
  },
}));

export { useStyles };
