import React from 'react';
import { DetailsGrid, Details, PreReqDetails } from '../../Styles/CourseList/courselist';
const DescModal = (props) => {
    return(
        <DetailsGrid>
            <Details>
                <div className="border">
                    <h3>Course:</h3>
                    <p>{props.course.shortName}</p>
                </div>

                <div className="border">
                    <h3>Days:</h3>
                    <p>{props.course.days}</p>
                </div>

                <div className="border">
                    <h3>Time:</h3>
                    <p>{props.course.time}</p>
                </div>

                <div>
                    <h3>Credits:</h3>
                    <p>{props.course.credits}</p>
                </div>
            </Details>

            {props.course.prereq.length > 0 ?
                <PreReqDetails>
                    <div>
                        <h3>Pre-Requisites:</h3>
                        <div>{props.course.prereq.map(pre => {
                            console.log(pre)
                            return <p key={pre}>{pre}</p>
                        })}</div>
                    </div>
                </PreReqDetails> : <></>}

        </DetailsGrid>
    )
}

export default DescModal