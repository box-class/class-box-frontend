import React from 'react';
import { Buttons } from '../Styles/Shared/reusable';
import { Link } from 'react-router-dom';

const LinkToButtons = (props) => {
    return (
        <Buttons
            large={props.large || false}
            centered={props.centered || true}
            onClick={() => props.handleClick() || null}
        >
            <Link to={props.url}>
                {props.text}
            </Link>
        </Buttons>
    )
}

export default LinkToButtons