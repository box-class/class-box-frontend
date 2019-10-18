import React, { useState, useEffect } from 'react';
import SingleAssignment from './SingleAssignment';
import { Link } from 'react-router-dom';
import {
    FeedWrap,
    TitleWrap,
    BackButton
} from '../../Styles/TeacherUpdates/student/student-tu-styles';

const ChosenCoursePage = (props) => {
    const [current, setCurrent] = useState();

    useEffect(() => {
        setCurrent(props.current[0]);
    }, [props]);

    return(
        <FeedWrap>
             <TitleWrap>
                 <h1>Welcome to {current && current.name}</h1>
             </TitleWrap>

             {current && current.feed.map(f => {
                 return <SingleAssignment
                            key={f.id}
                            feed={f}
                            cid={current.courseId} />
             })}

             <BackButton>
                 <Link to='/student/teacherUpdates'>
                     &#8592; Back
                 </Link>
             </BackButton>
        </FeedWrap>
    )
}

export default ChosenCoursePage
