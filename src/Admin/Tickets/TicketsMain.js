import React from 'react';
import {
    TicketsWrapper,
    TicketCategoriesWrap,
    Header
} from '../../Styles/adminStyles/admin-dashboard';
import Categories from '../Categories/Categories';
import plus from '../../assetts/plus-green.png';
import minus from '../../assetts/minus-green.png';
import check from '../../assetts/check-green.png';
import question from '../../assetts/question.png';
import work from '../../assetts/work.png';

const TicketsMain = () => {
    const categories = [
        { name: 'Create', link: 'test', image: plus },
        { name: 'Withdrawal', link: 'test', image: minus },
        { name: 'Changes', link: 'test', image: question },
        { name: 'Approvals', link: 'test', image: check }
    ];

    return (
        <TicketsWrapper>
            <Header>
                <img src={work} alt="work item icon" />
                <h3>Pending Work:</h3>
            </Header>
            <TicketCategoriesWrap>
                {categories.map(item => {
                    return <Categories
                                key={item.name}
                                data={item} />
                })}
            </TicketCategoriesWrap>
        </TicketsWrapper>
    )
}

export default TicketsMain