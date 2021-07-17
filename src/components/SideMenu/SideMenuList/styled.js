import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  sideMenuList: {
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  listItem: {
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px !important',
      color: 'orange !important',
    },
  },
}));

const NavItem = withStyles({
  root: {
    color: 'white',
    textAlign: 'left !important',
    borderLeft: `0.4rem solid black !important`,
  },
  selected: (props) => ({
    borderLeft: `0.4rem solid ${props.color} !important`,
    backgroundColor: '#283141 !important',
  }),
})(ListItem);

export { useStyles, NavItem };
