import React, { Component } from 'react';
import StudentNav from '../../Shared/Nav/studentNav/student-nav';

export default class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <StudentNav />
            </div>
        )
    }
}