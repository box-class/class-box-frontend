import React, { Component } from 'react';
import HomeNavBar from '../../Shared/Nav/studentNav/student-nav';
import { userData } from '../../data';
import ClassChoice from './class-choice';

export default class TeacherUpdates extends Component{
    constructor(props) {
        super(props);
        this.state = {
            class: {}
        }
    }

    // change this to a new route with the courseId in the nav
    getClassChoice = (obj) => {
        console.log(obj)
        this.setState({
            ...this.state,
            class: obj
        });
    }

    render() {
        console.log(this.state.class)
        return(
            <>
                <HomeNavBar />
                <ClassChoice classes={ userData.currentCourses } getClassChoice={ this.getClassChoice } />
            </>
        )
    }
}