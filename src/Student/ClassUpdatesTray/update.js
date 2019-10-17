import React from 'react';
import corn from '../../assetts/corn.jpg'
import {
    UpdatesItemWrap,
    ContentWrap
} from '../../Styles/student-dashboard/class-updates';

const Update = (props) => {
    const { data, name } = props;

    console.log(data)
    return (
        <UpdatesItemWrap>
            <div>
                <h6>{name}</h6>
            </div>
            <ContentWrap>
                <img src={data.thumbnail || corn} alt="thumbnail" />
                <p>{data.title}</p>
            </ContentWrap>
        </UpdatesItemWrap>
    )
}

export default Update