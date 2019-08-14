import React from 'react';
import {HeadingWrap} from '../../../../Styles/Calendar/grid-heading';

const GridHeading = (props) => {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const daysOfWeekMobile = [
        'S',
        'M',
        'T',
        'W',
        'Th',
        'F',
        'S'
    ]

    const dow = props.mobile ? daysOfWeekMobile : daysOfWeek;

    return(
        <HeadingWrap>
            {dow.map((day, i) => {
                return(
                    <div key={i}>
                        <h4>{day}</h4>
                    </div>
                )
            })}
        </HeadingWrap>
    )
}

export default GridHeading