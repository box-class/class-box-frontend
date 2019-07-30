import styled from "styled-components";
import { colors } from '../Shared/variables';

export const JumboWrap = styled.div`
    width: 100vw;
    overflow-x: hidden;


    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100vh;
        border-bottom: 5px solid ${colors.primary};
    }

    .tagline {
        position: relative;
        z-index: 1000;
        bottom: 250px;
        left: 20px;
        font-size: 42px;
        font-weight: bold;
        color: #FFF;
        line-height: 1.5em;
    }
`