import React from 'react';
import {
    TicketCategoryWrap,
} from '../../Styles/adminStyles/admin-dashboard';

const TicketCategories = (props) => {
    const { name, line, image } = props.data;

    return (
        // TODO: ADD Link to
        <TicketCategoryWrap>
            <h4>{name}</h4>
            <img src={image} alt='work item icon' />
        </TicketCategoryWrap>
    )
}

export default TicketCategories