import React from 'react';
import Course from './Course';
import {
    TeacherUpdateWrap
} from '../../Styles/TeacherUpdates/student/student-tu-styles';


// props from teacher-updates
// classes={ userData.currentCourses }
// getClassChoice={ this.getClassChoice }

const CoursesList = (props) => {
    return(
        <TeacherUpdateWrap>
            <h1>Teacher Updates</h1>
            <h3>Choose a class:</h3>
            {props.classes.map((course) => {
                return(
                    <Course key={course.courseId} course={course} />
                )
            })}
        </TeacherUpdateWrap>
    )
}

export default CoursesList