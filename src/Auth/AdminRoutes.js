import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import AdminDashboard from '../Admin/AdminDashboard';

const AdminRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/dashboard" component={AdminDashboard} />
            </Switch>
        </div>
    )
}

export default AdminRoutes