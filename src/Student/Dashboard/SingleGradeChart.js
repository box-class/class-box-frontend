import React from 'react';
import GradesDoughnut from '../../Charts/Doughnut/grades';
import {
    ChartWrap,
    Grade
} from '../../Styles/Shared/reusable';

const SingleGradeChart = (props) => {
    return (
        <ChartWrap key={props.course.shortName} large={props.large}>
            <h2>{props.course.shortName}</h2>
            <GradesDoughnut
                course={props.course}
                grade={props.course.grade}
            />
            <Grade>{props.course.grade}%</Grade>
        </ChartWrap>
    )
}

export default SingleGradeChart