import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/mainHome';
import StudentDashboard from './Student/Dashboard/student-dashboard-main';
import CourseListMain from './CourseRegistration/courselist';
import StudentSignUp from './SignUp/StudentSignup/studentSignup';
import StudentLogin from './Login/StudentLogin/studentLogin';
import TeacherLogin from './Login/TeacherLogin/teacherlogin';
import StudentCourses from './Student/CourseList/studentCourses';
import Calendar from './Shared/Calendar/calendar';
import TeacherUpdates from './Student/TeacherUpdates/teacher-updates';
import ClassFeed from './Student/TeacherUpdates/class-feed';
import TurnInHomeWork from './Student/TeacherUpdates/turn-in-hw/turn-in-hwk';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/student/signup" component={StudentSignUp} />
          <Route exact path="/student/login" component={StudentLogin} />
          <Route exact path="/teacher/login" component={TeacherLogin} />
          <Route exact path="/student/dashboard" component={StudentDashboard} />
          <Route exact path="/register/courses" component={CourseListMain} />
          <Route exact path="/student/courses" component={StudentCourses} />
          <Route exact path="/student/calendar" component={Calendar} />
          <Route exact path="/student/teacherUpdates" component={TeacherUpdates} />
          <Route exact path='/student/teacherUpdates/:id' component={ClassFeed} />
          <Route exact path='/student/turnin/:cid/:id' component={TurnInHomeWork} />
      </Switch>
    </div>
  );
}

export default App;
