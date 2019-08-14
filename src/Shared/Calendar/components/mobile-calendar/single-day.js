import React from 'react';

const SingleDay = (props) => {
    return(
        <>
            {props !== undefined ?
                <p onClick={() => props.handleSelectDay(props.day)}>
                    {props.day}
                </p> :
                <p />
            }
        </>
    )
}

export default SingleDay