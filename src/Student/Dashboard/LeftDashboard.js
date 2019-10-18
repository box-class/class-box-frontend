import React from 'react';
import GradeCharts from './GradeCharts';
import {
    LeftSide,
 } from '../../Styles/student-dashboard/student-dashboard';
import ScheduleComponent from './ScheduleComponent';

const LeftDashboard = (props) => {
    return (
        <LeftSide>
            <ScheduleComponent />
            <GradeCharts large={props.large} />
        </LeftSide>
    )
}

export default LeftDashboard