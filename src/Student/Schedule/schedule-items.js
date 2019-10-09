import React from 'react';
import Item from './item';
import { ScheduleWrap } from '../../Styles/Shared/schedule';

const ScheduleItems = (props) => {
    console.log(props)
    return(
        <ScheduleWrap>
            {props.data.map((item, index) => {
                return item.map(i => {
                    return <Item
                            key={i.id}
                            data={i}
                            color={index === 0 ? 1 : index % 2 === 0 ? 1 : 0}
                    />
                })
            })}
        </ScheduleWrap>
    )
}

export default ScheduleItems