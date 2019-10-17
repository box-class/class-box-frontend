import React, { Component } from 'react';
import HomeNavBar from '../../../Shared/Nav/StudentNavBar';
import { courseData, userData } from '../../../data';
import {
    TurnInWrap,
    TurnInContent,
    FormWrap,
    ImageWrap,
    DateWrap,
    ContentWrap,
    ButtonWrap
} from '../../../Styles/TeacherUpdates/student/turn-in-styles';

export default class TurnInHomeWork extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feedItem: {
                hwk: ''
            }
        }
    }

    componentDidMount() {
        // get id from nav link
        const {id, cid} = this.props.match.params

        const major = courseData.filter(i => {
            return i.major === userData.major
        });
        const { approvedCourses } = major[0];

        const courses = approvedCourses.filter(course => {
            return course.courseId === cid
        });
        const { feed } = courses[0];

        let feedItem = feed.filter(fi => {
            return fi.id === id
        });
        feedItem = feedItem[0]

        this.setState({
            ...this.state,
            feedItem: feedItem
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('uploaded')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { feedItem } = this.state;
        return(
            <div>
                <HomeNavBar />
                <TurnInWrap>
                    <ImageWrap>
                        <img src={feedItem.thumbnail} alt='thumbnail' />
                    </ImageWrap>
                    <TurnInContent>
                        <DateWrap>
                            <p>posted: {feedItem.postedDate}</p>
                            <p>due: {feedItem.dueDate}</p>
                        </DateWrap>
                        <ContentWrap>
                            <h3>{feedItem.title}</h3>
                            <p>{feedItem.assignmentDesc}</p>
                        </ContentWrap>

                        <FormWrap onSubmit={this.handleSubmit}>
                            <textarea rows="6" placeholder="Comments"/>
                            {this.state.hwk ? <p>Current File: {this.state.hwk}</p> : <p></p>}
                            <ButtonWrap>
                                <label>
                                    Choose file...
                                    <input onChange={this.handleChange} type='file' name='hwk' value={this.state.hwk || ''} accept='.pdf' className='custom' />
                                </label>
                                <button type='submit'>Submit</button>
                            </ButtonWrap>

                        </FormWrap>
                    </TurnInContent>
                </TurnInWrap>
            </div>
        )
    }
}