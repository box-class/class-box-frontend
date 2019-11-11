import React from 'react';
import {
    Header,
    EmployeesWrap,
    EmployeeCategoriesWrap
} from '../../Styles/adminStyles/admin-dashboard';
import employees from '../../assetts/employees.png';
import Categories from '../Categories/Categories';
import teachers from '../../assetts/teacher.png';
import messages from '../../assetts/message-green.png';

const EmployeesMain = () => {
    const employeeTabs = [
        { name: 'Teachers', image: teachers, link: 'test' },
        { name: 'Messages', image: messages, link: 'test' }
    ]
    return(
        <EmployeesWrap>
            <Header>
                <img src={employees} alt="employee icon" />
                <h3>Employee Management:</h3>
            </Header>
            <EmployeeCategoriesWrap>
                {employeeTabs.map(item => {
                    return <Categories key={item.name} data={item} />
                })}
            </EmployeeCategoriesWrap>
        </EmployeesWrap>
    )
}

export default EmployeesMain