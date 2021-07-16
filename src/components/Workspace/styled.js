import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(() => ({
  sideMenuList: {
    marginTop: '6rem',
  },
}));

const NavItem = withStyles({
  root: {
    color: 'white',
    textAlign: 'left !important',
    fontSize: '20px',
    borderLeft: `0.4rem solid black !important`,
  },
  selected: (props) => ({
    borderLeft: `0.4rem solid ${props.color} !important`,
    backgroundColor: '#283141 !important',
  }),
})(ListItem);

export { useStyles, NavItem };
