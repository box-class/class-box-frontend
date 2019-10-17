import React, { Component } from 'react';
import StudentNav from '../../Shared/Nav/StudentNavBar';
import {userData} from '../../data';
import { Link } from 'react-router-dom';
import StudentCourse from './course';
import {
    SCWrap,
    CoursesWrap
} from '../../Styles/student-courses/sCourses';
import { Buttons } from '../../Styles/Shared/reusable';

export default class StudentCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.setState({
            courses: userData.currentCourses
        })
    }

    render() {
        // TODO: when we click this it needs to go to that courses page and
        // show the user any past or present available work
        return(
            <CoursesWrap>
                <StudentNav />
                <h4>Your current courses:</h4>
                <SCWrap>
                    {this.state.courses.map(course => {
                        return (
                            <StudentCourse key={course.courseId} course={course}/>
                        )
                    })}
                </SCWrap>
                <Buttons large={true} centered={true}>
                    <Link to='/student/calendar'>
                        View On Calendar
                    </Link>
                </Buttons>
            </CoursesWrap>
        )
    }
}