import styled from "styled-components";
import { colors } from '../Shared/variables';

export const SignupWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
`

export const SignupFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 95%;
    margin: 20px 40px;
    p {
        padding-bottom: 8px;
    }

    .small {
        width: 75px;
    }

    .xs {
        width: 60px;
    }
`

export const WelcomeWrap = styled.div`
    text-align: center;
    align-self: center;
    color: white;
    width: 100%;
    padding: 20px;
    background: linear-gradient(45deg, rgba(86,89,166,1) 36%, rgba(163,89,200,1) 97%);
    line-height: 1.5em;
    font-size: 14px;

    h1 {
        margin: 20px auto;
        font-size: 46px;
    }

    h3 {
        margin: 10px auto;
        font-size: 26px;
    }
`

export const InputFields = styled.input`
    max-width: 40%;
    padding: 5px 8px;
    margin-bottom: 25px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #EEE;

    :focus {
        outline-color: ${colors.pink};
    }
`

export const ButtonWrap = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${({ center }) => center && `
        justify-content: center;
    `}
`

export const SelectWrap = styled.datalist`
    max-width: 40%;
    padding: 5px 8px;
    margin-bottom: 25px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #EEE;

    :focus {
        outline-color: ${colors.pink};
    }
`