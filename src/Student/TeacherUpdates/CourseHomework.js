import React from 'react';
import StudentNavBar from '../../Shared/Nav/StudentNavBar';
import { userData } from '../../data';
import CoursesList from './CoursesList';

const TeacherUpdates = (props) => {
    // const [classes, setClasses] = useState([]);
    return(
        <>
            <StudentNavBar />
            <CoursesList classes={ userData.currentCourses } />
        </>
    )
}

export default TeacherUpdates