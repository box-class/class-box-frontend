import React, { useEffect, useState } from 'react';
import { userData } from '../../data';
import FeedItems from './FeedItems';
import {
    ClassUpdatesWrap
} from '../../Styles/student-dashboard/class-updates';

const ClassFeedBar = () => {
    const [data, setData] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        const tempData = [];
        const courseName = [];
        userData.currentCourses.map(course => {
            return course.feed.length > 0 ?
                tempData.push(course.feed)
                && courseName.push(course.shortName)
                : null;
        });

        setData(tempData);
        setName(courseName);
    }, [])

    return (
        <ClassUpdatesWrap>
            {data && data.map((d, index) => {
                return <FeedItems data={d} key={index} name={name} />
            })}
        </ClassUpdatesWrap>
    )
}

export default ClassFeedBar