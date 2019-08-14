import React, { Component } from 'react';
import { courseData } from '../../data';
import HomeNavBar from '../../Shared/Nav/studentNav/student-nav';
import Feeds from './feeds';

export default class ClassFeed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feed: {},
            current: {}
        }
    }

    componentDidMount() {
        const currentCourse = courseData.map(c => {
            const newC = c.approvedCourses.filter(id => {
                return id.courseId === this.props.match.params.id
            });
            return newC
        });

        const current = currentCourse.filter(i => {
            return i.length > 0
        });

        this.setState({
            feed: current[0][0].feed,
            current: current[0][0]
        });
    }

    render() {
        return(
            <div>
                <HomeNavBar />
                <Feeds current={this.state.current} />
            </div>
        )
    }
}