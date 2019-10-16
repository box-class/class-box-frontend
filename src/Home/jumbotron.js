import React from 'react';
import jumbo from '../assetts/jumbotron.jpg';
import { JumboWrap } from '../Styles/Home/home';

const JumboTron = (props) => {
    return(
        <JumboWrap>
            <div>
                {/* <img src={jumbo} alt="student behind books" /> */}
                <div>
                    <h1 className="tagline">School is hard, keeping track of your grades shouldn't be...</h1>
                </div>
            </div>
        </JumboWrap>
    )
}

export default JumboTron