import React from 'react';
import FeedItem from './FeedItem';

const FeedItems = (props) => {
    const { data, name } = props;

    return (
        <>
            {data.map(i => {
                return <FeedItem data={i} key={i.title} name={name}/>
            })}

        </>
    )
}

export default FeedItems