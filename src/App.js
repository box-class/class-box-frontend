import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Home/mainHome';
import StudentDashboard from './Student/Dashboard/student-dashboard-main';
import CourseListMain from './CourseRegistration/courselist';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/student/dashboard" component={StudentDashboard} />
      <Route exact path="/register/courses" component={CourseListMain} />
    </div>
  );
}

export default App;
