import React, { Component } from 'react';
import Class from './class';
import {
    TeacherUpdateWrap
} from '../../Styles/TeacherUpdates/student/student-tu-styles';


// props from teacher-updates
// classes={ userData.currentCourses }
// getClassChoice={ this.getClassChoice }

export default class ClassChoice extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <TeacherUpdateWrap>
                <h1>Teacher Updates</h1>
                <h3>Choose a class:</h3>
                {this.props.classes.map((course) => {
                    return(
                        <Class key={course.courseId} course={course} handleClick={this.props.getClassChoice} />
                    )
                })}
            </TeacherUpdateWrap>
        )
    }
}