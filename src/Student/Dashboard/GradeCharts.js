import React from 'react';
import {
    ChartArea,
} from '../../Styles/Shared/reusable';
import {
    GradesHeading,
 } from '../../Styles/student-dashboard/student-dashboard';
import collection from '../../assetts/collection.png';
import SingleGradeChart from './SingleGradeChart';
import {userData} from '../../data';

const GradeCharts = (props) => {
    return (
        <>
            <GradesHeading>
                <img src={collection} alt="collection" />
                <h3>Grades:</h3>
            </GradesHeading>
            <ChartArea large={props.large}>

                {userData.currentCourses.map(course => {
                    return (
                    <SingleGradeChart
                        large={props.large}
                        course={course}
                    />
                )})}

            </ChartArea>
        </>
    )
}

export default GradeCharts