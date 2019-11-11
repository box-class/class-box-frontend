import React from 'react';
import { NavWrap, LogoWrap, MenuWrap } from '../../Styles/Shared/nav';
import box from '../../assetts/box.png';
import PopOutNavMenu from './PopOutNavMenu';


const HomepageNav = (props) => {
    const menuData = [
        {text: 'Student Login', url: '/login/student'},
        {text: 'Teacher Login', url: '/login/teacher'},
        {text: 'Admin Login', url: '/login/admin'},
        {text: 'Student Sign Up', url: '/signup/student'},
    ]

    return(
        <NavWrap>
            <LogoWrap>
                <img src={box} alt="box logo" />
                <h1>CLASS BOX</h1>
            </LogoWrap>
            <MenuWrap>
                <PopOutNavMenu menuData={menuData} />
            </MenuWrap>
        </NavWrap>
    )
}

export default HomepageNav