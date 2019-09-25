import React, { Component } from 'react';
import StudentNav from '../../Shared/Nav/studentNav/student-nav';
import GradesDoughnut from '../../Charts/Doughnut/grades';
import collection from '../../assetts/collection.png';
import {userData} from '../../data';
import {
    ChartWrap,
    ChartArea,
    Grade
} from '../../Styles/Shared/reusable';
import {
    GradesHeading,
    LeftSide,
    DashboardWrap,
    RightSide
 } from '../../Styles/student-dashboard/student-dashboard';
import ScheduleMain from '../Schedule/schedule-main';
import calendar from '../../assetts/calendar.png';

export default class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            large: false
        }
    }

    componentDidMount() {
        if(userData.currentCourses.length > 4) {
            this.setState({
                ...this.state,
                large: true
            })
        }
    }

    render() {
        return (
            <>
                <StudentNav />
                <DashboardWrap>
                    <LeftSide>
                        <div>
                            <img src={calendar} alt='calendar icon' />
                            <h3>Schedule:</h3>
                            <ScheduleMain />
                        </div>

                        <GradesHeading>
                            <img src={collection} alt="collection" />
                            <h3>Grades:</h3>
                        </GradesHeading>
                        <ChartArea large={this.state.large}>

                            {userData.currentCourses.map(course => {
                                return (
                                <ChartWrap key={course.shortName} large={this.state.large}>
                                    <h2>{course.shortName}</h2>
                                    <GradesDoughnut
                                        course={course}
                                        grade={course.grade}
                                    />
                                    <Grade>{course.grade}%</Grade>
                                </ChartWrap>
                            )})}
                        </ChartArea>
                    </LeftSide>

                    <RightSide>
                        <h3><span>Class </span>Updates</h3>
                    </RightSide>
                </DashboardWrap>
            </>
        )
    }
}