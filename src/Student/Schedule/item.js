import React from 'react';

const Item = (props) => {
    console.log(props)
    return(
        <>
            <div>{props.data.task}</div>
            <div>{props.data.time}</div>
        </>
    )
}

export default Item