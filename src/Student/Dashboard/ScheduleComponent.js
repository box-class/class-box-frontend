import React from 'react';
import { ScheduleArea, ScheduleHeader } from '../../Styles/Shared/schedule';
import ScheduleMain from '../Schedule/ScheduleMain';
import calendar from '../../assetts/calendar.png';

const ScheduleComponent = (props) => {
    return (
        <ScheduleArea>
            <ScheduleHeader>
                <img src={calendar} alt='calendar icon' />
                <h3>Todays Schedule:</h3>
            </ScheduleHeader>
            <ScheduleMain />
        </ScheduleArea>
    )
}

export default ScheduleComponent