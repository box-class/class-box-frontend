import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import menu from '../../assetts/menu.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_LOGGEDIN_STATUS } from '../../Actions/AuthActions';

// reusable menu component
// props require an array of objects with shape:
// {text: 'Student Login', url: '/login/student'}

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const PopOutNavMenu = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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


  const handleSignOut = () => {
    console.log('logging out...');
    localStorage.removeItem('token');
    dispatch({
      type: SET_LOGGEDIN_STATUS,
      payload: false
    })
  }

  const fullList = side => (
    <div
        className={classes.fullList}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          {props.menuData.map(item => {
              return (
                <ListItem button key={item.text}>
                    <ListItemText>
                        <Link to={item.url}>
                            {item.text}
                        </Link>
                    </ListItemText>
                </ListItem>
              )
          })}
          {props.showSignOut ? (
              <ListItem button onClick={() => handleSignOut()}>
                <ListItemText>
                    <Link to='/student/login'>
                        Sign Out
                    </Link>
                </ListItemText>
            </ListItem>
          ) : ( null )};
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

export default PopOutNavMenu