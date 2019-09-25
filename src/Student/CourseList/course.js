import React from 'react';
import {
    CourseWrap,
    Split
} from '../../Styles/student-courses/sCourses';


// props from studentCourses
// course={course}

const StudentCourse = (props) => {
    return(
        <CourseWrap>
            <h3>{props.course.shortName}</h3>
            <h5>{props.course.name}</h5>
            <Split>
                <p>{props.course.days} | {props.course.time}</p>
            </Split>
        </CourseWrap>
    )
}

export default StudentCourse