import React from 'react';
import { NavWrap, MenuWrap } from '../../Styles/Shared/nav';
import PopOutNavMenu from './PopOutNavMenu';
import ReusableLogoWrap from './ReusableLogoWrap';

const StudentNavBar = (props) => {
    const menuData = [
        {text: 'Dashboard', url: '/student/dashboard'},
        {text: 'Your Courses', url: '/student/courses'},
        {text: 'Register For Courses', url: '/student/register/courses'},
        {text: 'Messages', url: '/student/dashboard'}, //TODO: CHANGE ME
        {text: 'Teacher Updates', url: '/student/teacherUpdates'},
    ]

    return(
        <NavWrap>
            <ReusableLogoWrap />
            <MenuWrap>
                <PopOutNavMenu menuData={menuData} showSignOut={true} />
            </MenuWrap>
        </NavWrap>
    )
}

export default StudentNavBar