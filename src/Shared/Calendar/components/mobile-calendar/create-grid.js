import React, { Component } from 'react';
import {
    getNumberOfDays,
    getDayOfWeek,
    convertMonthId
} from '../../../util';
import CreateRows from './create-rows';
import { createMonthArray } from '../../../util';
import {
    CalendarWrap
} from '../../../../Styles/Calendar/calendar-rows';

export default class CreateGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            monthString: '',
            month: '',
            daysInMonth: null,
            dayOfWeek: '',
            fullStartDate: '',
            startDayCode: null,
            fullEndDate: '',
            endDateCode: null,
            monthArray: []
        }
    }

    componentDidMount() {
        const date = new Date();
        const year = date.getUTCFullYear();
        const month = date.getMonth();
        const dow = date.getUTCDay();

        const monthText = convertMonthId(month);
        const daysInMonth = getNumberOfDays(month);
        const dayOfWeek = getDayOfWeek(dow);

        const startDow = new Date(`${monthText} 1, ${year}`).getDay();
        const endDow = new Date(`${monthText} ${daysInMonth}, ${year}`).getDay();

        const mArr = createMonthArray(startDow, endDow);

        this.setState({
            ...this.state,
            year: year,
            monthString: monthText,
            month: month,
            days: daysInMonth,
            dayOfWeek: dayOfWeek,
            startDayCode: startDow,
            endDateCode: endDow,
            monthArray: mArr
        });
    }

    render() {
        const { startDayCode, endDateCode, monthArray } = this.state;
        return(
            <CalendarWrap>
                {monthArray.map((row, i) => {
                    return(
                        <CreateRows
                            rowData={row}
                            startDow={startDayCode}
                            endDow={endDateCode}
                            key={i}
                        />
                    )
                })}
            </CalendarWrap>
        )
    }
}