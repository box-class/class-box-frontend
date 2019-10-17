import React from 'react';
import GradeCharts from './GradeCharts';
import {
    LeftSide,
 } from '../../Styles/student-dashboard/student-dashboard';

const LeftDashboard = () => {
    return (
        <div>
            <LeftSide>
                <GradeCharts />
            </LeftSide>
        </div>
    )
}

export default LeftDashboard