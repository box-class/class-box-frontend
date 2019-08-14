import React, { Component } from 'react';
import Feed from './feed';
import { Link } from 'react-router-dom';
import {
    FeedWrap,
    TitleWrap,
    BackButton
} from '../../Styles/TeacherUpdates/student/student-tu-styles';

export default class Feeds extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { feed, courseId } = this.props.current;
        return(
            <FeedWrap>
                <TitleWrap>
                    <h1>Welcome to {this.props.current.name}</h1>
                </TitleWrap>
                {feed && feed.map(f => {
                    return(
                        <Feed key={f.id} feed={f} cid={courseId} />
                    )
                })}
                <BackButton>
                    <Link to='/student/teacherUpdates'>
                        &#8592; Back
                    </Link>
                </BackButton>
            </FeedWrap>
        )
    }
}