import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import menu from '../../../assetts/menu.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function StudentNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
        className={classes.fullList}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button>
            <ListItemText>
                <Link to='/student/dashboard'>
                  Dashboard
                </Link>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
                Your Courses
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
              <Link to='/register/courses'>
                Register For Courses
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
                Messages
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
                Teacher Updates
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
              <Link to='/student/login'>
                Sign Out
              </Link>
            </ListItemText>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('bottom', true)}>
        <img src={menu} alt="menu icon" />
      </Button>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
  );
}