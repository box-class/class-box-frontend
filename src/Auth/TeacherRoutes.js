import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import TeacherDashboard from '../Instructor/Dashboard/TeacherDashboard';

const TeacherRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/teacher/dashboard" component={TeacherDashboard} />
            </Switch>
        </div>

    )
}

export default TeacherRoutes