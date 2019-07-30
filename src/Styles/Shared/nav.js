import styled from "styled-components";
import { colors } from './variables';

export const NavWrap = styled.div`
    background: rgb(86,89,166);
    background: linear-gradient(45deg, rgba(86,89,166,1) 36%, rgba(163,89,200,1) 97%);
    width: 100%;
    height: 80px;
    display: flex;
    align-content: center;
    justify-content: space-between;
`

export const LogoWrap = styled.div`
    width: 50%;
    display: flex;
    align-content: center;
    margin-left: 10px;

    h1 {
        font-size: 32px;
        color: ${colors.white};
        align-self: center;
        margin-left: 12px;
    }

    img {
        align-self: center;
        width: 40px;
    }
`

export const MenuWrap = styled.div`
    justify-self: flex-end;
    align-self: center;
    margin-right: 25px;

    img {
        width: 40px;
    }
`