import styled from "styled-components";
import { colors } from '../Shared/variables';

export const ScheduleArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ScheduleHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 10px;

    h3 {
        align-self: center;
        padding-left: 10px;
        color: ${colors.primary};
        font-size: 25px;
    }

    img {
        width: 35px;
    }
`

export const ScheduleWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
`

export const ScheduleItemWrap = styled.div`
    width: 100%;
    display: flex;
    padding: 15px 0;
    background-color: ${props => props.color === 1 ? "white" : null};
`

export const ItemWrap = styled.div`
    width: 87%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`