import React from 'react';
import { Link } from 'react-router-dom';
import {
    FeedItem,
    ImageWrap,
    DateWrap,
    ContentWrap,
    LinksWrap
} from '../../Styles/TeacherUpdates/student/student-tu-styles';

const SingleAssignment = (props) => {
    const { feed } = props;

    return (
        <FeedItem>
                <ImageWrap>
                    <img src={feed.thumbnail} alt='thumbnail for article' />
                </ImageWrap>
                <DateWrap>
                    <p>posted: {feed.postedDate}</p>
                    <p>due: {feed.dueDate}</p>
                </DateWrap>
                <ContentWrap>
                    <h4>{feed.title}</h4>
                    <p>{feed.assignmentDesc}</p>
                </ContentWrap>
                <LinksWrap>
                    <a href={feed.article} target='_blank' rel="noopener noreferrer">
                        <p>Article</p>
                    </a>
                    <Link to={`/student/turnin/${props.cid}/${feed.id}`} >
                        <p>Turn In</p>
                    </Link>
                </LinksWrap>
        </FeedItem>
    )
}

export default SingleAssignment