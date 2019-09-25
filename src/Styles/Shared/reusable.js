import styled from "styled-components";
import { colors, media } from '../Shared/variables';

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

        ${media.tablet} {
            width: 60%;
        }

        ${media.desktop} {
            width: 50%;
        }

        ${media.largeDt} {
            width: 30%;
        }

        ${media.modern} {
            width: 20%;
        }
    `}

    ${({centered}) => centered && `
        margin: 40px auto;
        justify-self: center;
        align-self: center;
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

        ${media.tablet} {
            flex-direction: row;
        }
    `}
`

export const ChartWrap = styled.div`
    width: 45%;
    display: flex;
    background-color: #FFF;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid #FFF;
    margin: 8px auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 3px 3px 20px lightgray;

    h2 {
        padding-bottom: 10px;
        text-align: center;
        font-size: 18px;
        color: ${colors.primary};
        font-weight: bold;
        text-shadow: 3px 4px 2px #EEE;
    }

    ${({large}) => large && `
        width: 75%;

        ${media.tablet} {
            width: 40%;
        }

        ${media.desktop} {
            width: 40%;
        }

        ${media.largeDt} {
            width: 30%;
        }
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

export const LineGraphWrap = styled.div`
    display: none;

    ${media.tablet} {
        display: inline-block;
        width: 100%;
        margin: 20px auto;
        h3 {
            align-self: center;
            padding-left: 10px;
            color: ${colors.primary};
            font-size: 25px;
        }
    }
`

export const LineGraph = styled.div`
    width: 95%;
    margin: 20px auto;
    background-color: #FFF;
    border: 1px solid #FFF;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 30px lightgray;

    ${media.largeDt} {
        width: 90%;

    }
`