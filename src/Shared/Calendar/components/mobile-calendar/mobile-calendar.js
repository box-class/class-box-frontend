import React, { Component } from 'react';
import Month from '../shared/monthHeader';
import CreateGrid from '../mobile-calendar/create-grid';
import GridHeading from '../shared/grid-heading';
import { userData } from '../../../../data';

export default class MobileCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScheduled: []
        }
    }

    componentDidMount() {
        const scheduled = userData.currentCourses.map(obj => {
            const {time, days, courseId} = obj
            return { time: time, days: days, courseId: courseId }
        });
        this.setState({
            currentScheduled: scheduled
        })
    }

    render() {
        const {currentScheduled} = this.state;
        return(
            <div>
                <Month />
                <GridHeading mobile={true} />
                <CreateGrid currentScheduled={currentScheduled} />
            </div>
        )
    }
}