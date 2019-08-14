import styled from "styled-components";
import { colors } from '../Shared/variables';


export const CoursesWrap = styled.div`
    width: 100%;
    margin: auto;

    h3 {
        width: 95%;
        text-align: center;
        font-size: 18px;
        color: ${colors.primary};
        font-weight: bold;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid ${colors.pink};
    }

    h4 {
        font-size: 26px;
        margin-top: 20px;
        padding-left: 20px;
    }

    h5 {
        text-align: center;
    }
`

export const SCWrap = styled.div`
    width: 95%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const CourseWrap = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 15px;
    border: 1.2px solid #EEE;
    border-radius: 5px;
    box-shadow: 2px 2px 2px lightgrey;
    margin-top: 20px;
`

export const Split = styled.div`
    width: 70%;
    margin: 20px auto 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`