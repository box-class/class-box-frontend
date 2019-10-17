import React from 'react';
import Update from './update';

const Updates = (props) => {
    const { data, name } = props;

    return (
        <>
            {data.map(i => {
                return <Update data={i} key={i.title} name={name}/>
            })}

        </>
    )
}

export default Updates