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
import { GradesHeading } from '../../Styles/student-dashboard/student-dashboard';

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
            <div>
                <StudentNav />
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
            </div>
        )
    }
}