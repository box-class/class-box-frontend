import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import AdminDashboard from '../Admin/Dashboard/AdminDashboard';
import EmployeesMain from '../Admin/Employees/EmployeesMain';
import TicketsMain from '../Admin/Tickets/TicketsMain';

const AdminRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/dashboard" component={AdminDashboard} />
                <Route exact path="/admin/employees" component={EmployeesMain} />
                <Route exact path="/admin/tickets" component={TicketsMain} />
            </Switch>
        </div>
    )
}

export default AdminRoutes