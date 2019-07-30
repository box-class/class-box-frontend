import styled from "styled-components";
import { colors } from '../Shared/variables';

export const ListWrap = styled.div`
    width: 98%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`

export const HeaderWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #EEE;

    h4 {
        padding-bottom: 15px;
        font-size: 25px;
    }
`

export const ListItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    border-bottom: 2px solid #EEE;

    p {
        align-self: center;
        padding: 0 5px;
        justify-self: flex-start;
        text-align: left;
    }
`

export const ShowMore = styled.button`
    align-self: center;
    background-color: ${colors.pink};
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: white;
    font-weight: bold;

    img {
        width: 16px;
        height: auto;
    }

    :focus {
        outline: none;
    }
`

export const DetailsGrid = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: flex-wrap;
`

export const Details = styled.div`
    width: 95%;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #EEE;

    h3 {
        font-weight: bold;
        padding-bottom: 5px;
    }

    .border {
        border-right: 1px solid #EEE;
        padding-right: 10px;
    }
`

export const PreReqDetails = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #EEE;

    h3 {
        font-weight: bold;
        padding-bottom: 5px;
    }
`