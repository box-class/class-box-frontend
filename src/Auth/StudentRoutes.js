import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import StudentCourses from '../Student/CourseList/studentCourses';
import Calendar from '../Shared/Calendar/calendar';
import TeacherUpdates from '../Student/TeacherUpdates/teacher-updates';
import ClassFeed from '../Student/TeacherUpdates/class-feed';
import TurnInHomeWork from '../Student/TeacherUpdates/turn-in-hw/turn-in-hwk';
import StudentDashboard from '../Student/Dashboard/student-dashboard-main';
import CourseListMain from '../CourseRegistration/courselist';

const StudentRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/student/dashboard" component={StudentDashboard} />
                <Route exact path="/student/register/courses" component={CourseListMain} />
                <Route exact path="/student/courses" component={StudentCourses} />
                <Route exact path="/student/calendar" component={Calendar} />
                <Route exact path="/student/teacherUpdates" component={TeacherUpdates} />
                <Route exact path='/student/teacherUpdates/:id' component={ClassFeed} />
                <Route exact path='/student/turnin/:cid/:id' component={TurnInHomeWork} />
            </Switch>
        </div>
    )
}

export default StudentRoutes