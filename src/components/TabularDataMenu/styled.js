import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from '../../core/theme/baseTheme';

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#1F2837 !important',
    flexShrink: 0,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: theme.mixins.toolbar.minHeight + 1,
  },
  drawerClose: {
    background: '#1F2837 !important',
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
  drawerTitle: {
    fontSize: '16px',
    marginTop: '1rem',
    color: 'white',
  },
  drawerTitleIcon: {
    marginLeft: '1rem',
    marginRight: '0.3rem',
    marginTop: '1rem',
    color: 'white',
  },
  drawerTitleIconTutton: {
    background: 'white',
  },
  dataTable: { marginTop: '1rem' },
  tableTitles: {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    paddingTop: '0.3rem',
    borderBottom: '1px solid white',
  },
  tableValue: {
    fontSize: '12px',
    fontFamily: 'Consolas,monaco,monospace',
    color: 'white',
    textAlign: 'center',
    marginTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #ffffff33',
  },
  space: {
    marginBottom: '5rem',
  },
}));

export { useStyles };
