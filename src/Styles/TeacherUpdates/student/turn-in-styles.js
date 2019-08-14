import styled from "styled-components";
import { colors } from '../../Shared/variables';

export const TurnInWrap = styled.div`
    width: 95%;
    margin: 15px auto 0;
    display: flex;
    flex-direction: column;
    border: 2px solid ${colors.gray};
    border-radius: 10px;
    box-shadow: 3px 3px 4px ${colors.gray};
`

export const TurnInContent = styled.div`
    width: 90%;
    margin: 20px auto;
`

export const ImageWrap = styled.div`
    width: 100%;
    background-color: #F9F9F9;
    padding: 5px;
    margin: 0 auto;
    text-align: center;
`

export const DateWrap = styled.div`
    width: 100%;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: gray;
`

export const ContentWrap = styled.div`
    width: 100%;
    margin: 0 auto;

    h3 {
        margin-bottom: 20px;
        text-align: center;
        color: ${colors.primary};
        font-size: 26px;
        padding-bottom: 5px;
        border-bottom: 1px solid ${colors.pink};
    }
`

export const FormWrap = styled.form`
    width: 100%;
    padding: 20px 0 0;
    margin: 20px auto 0;
    // display: flex;
    // flex-direction: column;

    textarea {
        width: 98%;
        border: none;
        border: 1px solid gray;
        border-radius: 5px;
        margin: 0 auto;
        padding: 10px;
        font-family: 'Roboto', sans-serif;
    }

    p {
        padding-top: 5px;
        text-align: center;
    }
`

export const ButtonWrap = styled.div`
    width: 100%;
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    label {
        text-align: center;
        width: 45%;
        margin: 0 auto;
        padding: 10px 0;
        background-color: ${colors.green};
        border: none;
        color: ${colors.white};
        font-size: 18px;
        border-radius: 25px;
    }

    input[type='file'] {
        display: none;
    }

    button {
        width: 45%;
        margin: 0 auto;
        padding: 10px 0;
        background-color: ${colors.green};
        border: none;
        color: ${colors.white};
        font-size: 18px;
        border-radius: 25px;
    }
`