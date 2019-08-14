import React, { Component } from 'react';
import Month from '../shared/monthHeader';
// import { getNumberOfDays, getDayOfWeek } from '../../../util';

export default class DesktopCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                <Month />
                Desktop
            </div>
        )
    }
}