import React from 'react';
import { NavWrap, LogoWrap, MenuWrap } from '../../Styles/Shared/nav';
import box from '../../assetts/box.png';
import HomePageNavMenu from './popOutMenu';

const HomeNavBar = (props) => {
    return(
        <NavWrap>
            <LogoWrap>
                <img src={box} alt="box logo" />
                <h1>CLASS BOX</h1>
            </LogoWrap>
            <MenuWrap>
                <HomePageNavMenu />
            </MenuWrap>
        </NavWrap>
    )
}

export default HomeNavBar