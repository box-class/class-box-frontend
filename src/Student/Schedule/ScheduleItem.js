import React from 'react';
import { ScheduleItemWrap, ItemWrap } from '../../Styles/Shared/schedule';

const ScheduleItem = (props) => {
    return(
        <ScheduleItemWrap color={props.color} >
            <ItemWrap>
                <div>{props.data.task}</div>
                <div>{props.data.time}</div>
            </ItemWrap>
        </ScheduleItemWrap>
    )
}

export default ScheduleItem