import React from 'react';
import { Link } from 'react-router-dom';
import {
    FeedItem,
    ImageWrap,
    DateWrap,
    ContentWrap,
    LinksWrap
} from '../../Styles/TeacherUpdates/student/student-tu-styles';

const Feed = (props) => {
    return (
        <FeedItem>
                <ImageWrap>
                    <img src={props.feed.thumbnail} alt='thumbnail for article' />
                </ImageWrap>
                <DateWrap>
                    <p>posted: {props.feed.postedDate}</p>
                    <p>due: {props.feed.dueDate}</p>
                </DateWrap>
                <ContentWrap>
                    <h4>{props.feed.title}</h4>
                    <p>{props.feed.assignmentDesc}</p>
                </ContentWrap>
                <LinksWrap>
                    <a href={props.feed.article} target='_blank' rel="noopener noreferrer">
                        <p>Article</p>
                    </a>
                    <Link to={`/student/turnin/${props.cid}/${props.feed.id}`} >
                        <p>Turn In</p>
                    </Link>
                </LinksWrap>
            {/* add a button where the student can turn in homework */}
        </FeedItem>
    )
}

export default Feed