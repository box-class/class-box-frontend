import React from 'react';
import box from '../../assetts/box.png';
import { LogoWrap } from '../../Styles/Shared/nav';

const ReusableLogoWrap = () => {
    return (
        <LogoWrap>
            <img src={box} alt="box logo" />
            <h1>CLASS BOX</h1>
        </LogoWrap>
    )
}

export default ReusableLogoWrap