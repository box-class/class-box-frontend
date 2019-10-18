import React from 'react';
import {
    ClassWrap
} from '../../Styles/TeacherUpdates/student/student-tu-styles';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const link = `/student/teacherUpdates/${props.course.courseId}`;

    return (
        <ClassWrap>
            <Link to={link}>
                <h3>{props.course.shortName} - {props.course.name}</h3>
            </Link>
        </ClassWrap>
    )
}

export default Course