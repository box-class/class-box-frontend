import React from 'react';
import {
    DateWrap,
    ContentWrap,
} from '../../../Styles/TeacherUpdates/student/turn-in-styles';

const TurnInContent = (props) => {
    const { feedItem } = props;

    return (
        <>
            <DateWrap>
                <p>posted: {feedItem && feedItem.postedDate}</p>
                <p>due: {feedItem && feedItem.dueDate}</p>
            </DateWrap>
            <ContentWrap>
                <h3>{feedItem && feedItem.title}</h3>
                <p>{feedItem && feedItem.assignmentDesc}</p>
            </ContentWrap>
        </>
    )
}

export default TurnInContent