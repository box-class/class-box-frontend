import React, { useEffect, useState } from 'react';
import HomeNavBar from '../../../Shared/Nav/StudentNavBar';
import { userData } from '../../../data';
import {
    TurnInWrap,
    TurnInContentWrap,
    ImageWrap,
} from '../../../Styles/TeacherUpdates/student/turn-in-styles';
import TurnInContent from './TurnInContent';
import TurnInForm from './TurnInForm';

const TurnInHomeWork = (props) => {
    const [hwk, setHwk] = useState();
    const [feedItem, setFeedItem] = useState();

    useEffect(() => {
        // get id from nav link
        const {id, cid} = props.match.params
        const { currentCourses } = userData;

        const courses = currentCourses.filter(course => {
            return course.courseId === cid
        });
        const { feed } = courses[0];

        let feedItem = feed.filter(fi => {
            return fi.id === id
        });
        feedItem = feedItem[0]

        setFeedItem(feedItem);
    }, [props.match.params])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('uploaded')
    }

    const handleChange = (e) => {
        setHwk(e.target.value)
    }

    return(
        <div>
            <HomeNavBar />
            <TurnInWrap>
                <ImageWrap>
                    <img src={feedItem && feedItem.thumbnail} alt='thumbnail' />
                </ImageWrap>
                <TurnInContentWrap>
                    <TurnInContent feedItem={feedItem && feedItem} />
                    <TurnInForm
                        hwk={hwk && hwk}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                </TurnInContentWrap>
            </TurnInWrap>
        </div>
    )
}

export default TurnInHomeWork