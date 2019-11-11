import React from 'react';
import ScheduleComponent from '../../Student/Dashboard/ScheduleComponent';
import {
    DashboardWrap,
 } from '../../Styles/student-dashboard/student-dashboard';
import {
    SectionWrapper
} from '../../Styles/adminStyles/admin-dashboard';
import AdminNavBar from '../../Shared/Nav/AdminNavBar';
import TicketsMain from '../Tickets/TicketsMain';
import EmployeesMain from '../Employees/EmployeesMain';

const AdminDashboard = () => {
    return (
        <>
            <AdminNavBar />
            <DashboardWrap flex="column">
                <ScheduleComponent />
                <SectionWrapper>
                    <EmployeesMain />
                    <TicketsMain />
                </SectionWrapper>
            </DashboardWrap>
        </>
    )
}

export default AdminDashboard