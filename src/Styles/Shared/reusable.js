import styled from "styled-components";
import { colors } from '../Shared/variables';

export const SearchBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 10px auto;
    border: 1px solid #EEE;
    border-radius: 5px;


    input {
        border: none;
        padding: 15px;
        color: gray;
    }

    input:focus {
        outline: none;
    }

    img {
        width: 28px;
        height: 24px;
        align-self: center;
        padding-right: 5px;
    }
`

export const Buttons = styled.button`
    border: none;
    border-radius: 50px;
    padding: 10px 30px;
    color: white;
    background-color: ${colors.green};

    :focus {
        outline: none;
    }

    ${({large}) => large && `
        width: 80%;
        padding: 15px;
        box-shadow: 5px 10px 5px #EEE;
        font-size: 18px;
    `}

    ${({centered}) => centered && `
        margin: 5% 10%;
        text-align: center;
    `}
`

export const ChartArea = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h2 {
        font-size: 25px;
        text-align: center;
        color: ${colors.primary}
    }

    ${({large}) => large && `
        flex-direction: column;
        margin: 20px auto;
        justify-content: center;
        align-content: center;
    `}
`

export const ChartWrap = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid #eee;
    margin: 8px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 4px 4px 4px #eee;

    h2 {
        text-align: center;
        font-size: 18px;
        color: ${colors.primary};
        font-weight: bold;
        text-shadow: 3px 4px 2px #EEE;
    }

    ${({large}) => large && `
        width: 75%;
    `}
`

export const Grade = styled.h3`
    text-align: center;
    position: relative;
    bottom: 82px;
    left: 0;
    color: ${colors.pink};
    font-size: 25px;
    font-weight: bold;
`