import styled from "styled-components";
import { colors, media } from '../Shared/variables';

export const SignupWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    .title {
        font-size: 26px;
        color: ${colors.primary};
        margin-bottom: 20px;
    }

    ${media.desktop} {
        flex-direction: row;
    }
`

export const SignupFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 95%;
    margin: 20px auto;
    p {
        padding-bottom: 8px;
    }

    .small {
        width: 68px;
    }

    .medium {
        width: 95px;
    }

    .xs {
        width: 60px;
    }

    ${media.tablet} {
        width: 90%;
        margin: 20px auto;
    }

    ${media.desktop} {
        width: 50%;
        margin: auto;
        padding-left: 2%;
    }
`

export const WelcomeWrap = styled.div`
    display: flex;
    text-align: center;
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

    ${media.desktop} {
        width: 50%;
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        height: 100%;

        h3 {
            font-size: 32px;
        }

        h1 {
            font-size: 52px;
        }

        p {
            font-size: 14px;
        }
    }
`

export const WelcomeContent = styled.div`
    align-self: center;
    justify-self: center;
    margin: auto;
`

export const InputFields = styled.input`
    max-width: 40%;
    padding: 5px 8px;
    margin-bottom: 25px;
    margin-right: 20px;
    border: none;
    border-bottom: 1px solid ${colors.primary};

    :focus {
        outline-color: ${colors.pink};
    }
`

export const ButtonWrap = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    ${({ center }) => center && `
        justify-content: center;
    `}

    ${media.desktop} {
        width: 95%;
    }
`
