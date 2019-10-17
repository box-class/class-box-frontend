import React, { useState, useEffect } from 'react';
import StudentNavBar from '../../Shared/Nav/StudentNavBar';
import {userData} from '../../data';
import {
    DashboardWrap,
 } from '../../Styles/student-dashboard/student-dashboard';
import LeftDashboard from './LeftDashboard';
import RightDashboard from './RightDashboard';

const StudentDashboard = () => {
    const [large, setLarge] = useState(false);

    useEffect(() => {
        userData.currentCourses.length > 4 ?
        setLarge(true) :
        setLarge(false);
    }, [])

    return (
        <>
            <StudentNavBar />
            <DashboardWrap>
                <LeftDashboard large={large} />
                <RightDashboard />
            </DashboardWrap>
        </>
    )
}

export default StudentDashboard