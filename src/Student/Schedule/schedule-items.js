import React, { useEffect, useState } from 'react';
import Item from './item';

const ScheduleItems = (props) => {
    return(
        <div>
            {props.data.map(item => {
                return item.map(i => {
                    return <Item key={i.id} data={i} />
                })
            })}
        </div>
    )
}

export default ScheduleItems