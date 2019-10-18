import React from 'react';
import {
    RightSide
 } from '../../Styles/student-dashboard/student-dashboard';
 import ClassFeedBar from '../ClassFeedBar/ClassFeedBar';

const RightDashboard = () => {
    return (
        <RightSide>
            <h3><span>Class </span>Updates</h3>
            <ClassFeedBar />
        </RightSide>
    )
}

export default RightDashboard