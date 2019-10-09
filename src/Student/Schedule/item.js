import React from 'react';
import { ScheduleItem, ItemWrap } from '../../Styles/Shared/schedule';

const Item = (props) => {
    console.log(props)
    return(
        <ScheduleItem color={props.color} >
            <ItemWrap>
                <div>{props.data.task}</div>
                <div>{props.data.time}</div>
            </ItemWrap>
        </ScheduleItem>
    )
}

export default Item