import React, { useState, useEffect } from 'react';
import { userData } from '../../data';
import HomeNavBar from '../../Shared/Nav/StudentNavBar';
import ChosenCoursePage from './ChosenCoursePage';

const ClassAssignments = (props) => {
    const [current, setCurrent] = useState([]);
    const { currentCourses } = userData;
    const { id } = props.match.params;

    useEffect(() => {
        const currentCourse = currentCourses.filter(course => {
            return course.courseId === id
        })
        setCurrent(currentCourse);
    }, [currentCourses, id]);

    return(
        <div>
            <HomeNavBar />
            <ChosenCoursePage current={current} />
        </div>
    )
}

export default ClassAssignments