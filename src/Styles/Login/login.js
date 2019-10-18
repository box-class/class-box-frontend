import styled from "styled-components";
import { colors, media } from '../Shared/variables';

export const LoginWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    height: 100%;
    background: linear-gradient(45deg, rgba(86,89,166,1) 36%, rgba(163,89,200,1) 97%);
`

export const LoginFormWrap = styled.div`
    width: 90%;
    border-radius: 15px;
    margin: auto;
    background-color: ${colors.white};
    min-height: 500px;
    height: auto;

    img {
        margin: 20px auto 10px;
    }

    h3 {
        margin-top: 20px;
        font-size: 25px;
        font-weight: 600;
        color: ${colors.primary}
    }

    h4 {
        color: ${colors.primary};
        margin-top: 45px;
    }

    ${media.tablet} {
        width: 50%;
    }

    ${media.largeDt} {
        width: 30%;
    }

    .forgotpw {
        margin: 0 auto;
        padding-bottom: 20px;
        font-size: 12px;
    }
`

export const Form = styled.div`
    margin: 10px auto;
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const InputFields = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #EEE;
    margin: 20px auto 0;
    padding: 10px;
    font-size: 16px;
    color: gray;
    margin-bottom: 20px;

    :first-of-type {
        margin-top: 10%;
    }

    :focus {
        outline: none;
        border-bottom: 1px solid ${colors.pink};
    }
`

export const ButtonWrap = styled.div`
    width: 100%;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
`