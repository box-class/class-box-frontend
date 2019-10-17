import React, { useEffect } from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGGEDIN_STATUS } from './Actions/AuthActions';

import HomePage from './Home/mainHome';
import StudentSignUp from './SignUp/StudentSignup/studentSignup';
import StudentLogin from './Login/studentLogin';
import TeacherLogin from './Login/teacherlogin';
import AdminLogin from './Login/AdminLogin';

import TeacherRoutes from './Auth/TeacherRoutes';
import StudentRoutes from './Auth/StudentRoutes';
import AdminRoutes from './Auth/AdminRoutes';


const getAuthData = state => {
  const { loggedIn } = state.AuthReducer;
  return { loggedIn };
}

const ProtectedRoute = ({ component: Component, logged, path, routeTo, ...rest }) => {
  return (
    <Route path={path} {...rest} render={(props) => {
      return logged ? (
        <Component {...props} />
      ) : (
        <Redirect to={routeTo} />
      )
    }}
  />
)};

const App = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(getAuthData);

  useEffect(() => {
    const dispatchLoggedStatus = (bool) => {
      if( bool === false ) localStorage.clear();
      dispatch({
        type: SET_LOGGEDIN_STATUS,
        payload: bool
      });
    }

    const token = localStorage.getItem('token');
    token != null ?
      dispatchLoggedStatus(true) :
      dispatchLoggedStatus(false);
  }, [loggedIn, dispatch]);



  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup/student" component={StudentSignUp} />
          <Route exact path="/login/student" component={StudentLogin} />
          <Route exact path="/login/teacher" component={TeacherLogin} />
          <Route exact path="/login/admin" component={AdminLogin} />

          <ProtectedRoute path="/student" component={StudentRoutes} logged={loggedIn} routeTo={"/login/student"} />
          <ProtectedRoute path="/teacher" component={TeacherRoutes} logged={loggedIn} routeTo={"/login/teacher"} />
          <ProtectedRoute path="/admin" component={AdminRoutes} logged={loggedIn} />

      </Switch>
    </div>
  );
}

export default App;
