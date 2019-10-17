import React, { Component } from 'react';
import StudentNavBar from '../../Shared/Nav/StudentNavBar';
import { userData } from '../../data';
import ClassChoice from './class-choice';

export default class TeacherUpdates extends Component{
    constructor(props) {
        super(props);
        this.state = {
            class: {}
        }
    }

    render() {
        return(
            <>
                <StudentNavBar />
                <ClassChoice classes={ userData.currentCourses } />
            </>
        )
    }
}