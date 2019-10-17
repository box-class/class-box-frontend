import React, { Component } from 'react';
import CourseList from './courses';
import HomeNavBar from '../Shared/Nav/StudentNavBar';
import SearchBar from './searchBar/searchbar';
import {courseData, userData} from '../data';


export default class CourseListMain extends Component {
    constructor() {
        super();
        this.state = {
            currentChoices: [],
            majorData: [],
            searchData: []
        }
    }

    componentDidMount() {
        const userCourse = courseData.filter(course => {
            return course.major === userData.major
        })
        this.setState({
            ...this.state,
            majorData: userCourse[0].approvedCourses
        });
    }

    handleSearch = (string) => {
        let newData = [];

        if(string.length === 1) {
            newData = this.state.majorData
        } else {
            newData = this.state.majorData.filter(d => {
                return d.name.toLowerCase().includes(string.toLowerCase())
            })
        }

        this.setState({
            ...this.state,
            searchData: newData
        });
    }

    render() {
        return (
            <>
                <HomeNavBar />
                <SearchBar courses={courseData} handleSearch={this.handleSearch}/>
                {this.state.searchData.length > 0 ?
                    <CourseList courses={this.state.searchData}/> :
                    <CourseList courses={this.state.majorData}/>
                }
            </>
        )
    }
}