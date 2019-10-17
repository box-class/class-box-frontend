import React from 'react';
import {
    RightSide
 } from '../../Styles/student-dashboard/student-dashboard';
 import ClassUpdatesTray from '../ClassUpdatesTray/class-updates';

const RightDashboard = () => {
    return (
        <RightSide>
            <h3><span>Class </span>Updates</h3>
            <ClassUpdatesTray />
        </RightSide>
    )
}

export default RightDashboard