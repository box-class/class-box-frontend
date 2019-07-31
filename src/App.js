import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/mainHome';
import StudentDashboard from './Student/Dashboard/student-dashboard-main';
import CourseListMain from './CourseRegistration/courselist';
import StudentSignUp from './SignUp/StudentSignup/studentSignup';
import StudentLogin from './Login/StudentLogin/studentLogin';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/student/signup" component={StudentSignUp} />
          <Route exact path="/student/login" component={StudentLogin} />
          <Route exact path="/student/dashboard" component={StudentDashboard} />
          <Route exact path="/register/courses" component={CourseListMain} />
      </Switch>
    </div>
  );
}

export default App;
