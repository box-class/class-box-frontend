import styled from "styled-components";
import { colors, media } from '../Shared/variables';

export const GradesHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    margin: 20px 10px;

    img {
        width: 35px;
    }

    h3 {
        align-self: center;
        padding-left: 10px;
        color: ${colors.primary};
        font-size: 25px;
    }
`

export const DashboardWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flex};
`

export const LeftSide = styled.div`
    background-color: #FCFCFC;

    ${media.desktop} {
        width: 70%;
    }

    ${media.modern} {
        width: 80%;
    }
`

export const RightSide = styled.div`
    display: none;

    ${media.desktop} {
        display: inline-block;
        width: 30%;
        background-color: #FFF;

        h3 {
            width: 90%;
            color: ${colors.pink};
            font-weight: bold;
            font-size: 26px;
            margin: 30px auto 0;
            padding-bottom: 20px;
            border-bottom: 1px solid ${colors.gray};
        }

        span {
            font-weight: normal;
        }
    }

    ${media.modern} {
        width: 20%;
    }
`