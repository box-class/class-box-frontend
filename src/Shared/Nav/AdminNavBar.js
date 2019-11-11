import React from 'react';
import { NavWrap, MenuWrap } from '../../Styles/Shared/nav';
import PopOutNavMenu from './PopOutNavMenu';
import ReusableLogoWrap from './ReusableLogoWrap';

const AdminNavBar = (props) => {
    const menuData = [
        {text: 'Employees', url: '/admin/employees'},
        {text: 'Tickets', url: '/admin/tickets'},
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

export default AdminNavBar