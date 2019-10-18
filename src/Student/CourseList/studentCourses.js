import React, { useState, useEffect } from 'react';
import StudentNavBar from '../../Shared/Nav/StudentNavBar';
import {userData} from '../../data';
import StudentCourse from './course';
import {
    SCWrap,
    CoursesWrap
} from '../../Styles/student-courses/sCourses';

const StudentCourses = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(userData.currentCourses);
    }, []);

    return(
        <CoursesWrap>
            <StudentNavBar />
            <h4>Your current courses:</h4>
            <SCWrap>
                {courses.map(course => {
                    return (
                        <StudentCourse key={course.courseId} course={course}/>
                    )
                })}
            </SCWrap>
        </CoursesWrap>
    )
}

export default StudentCourses
