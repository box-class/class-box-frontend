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
`