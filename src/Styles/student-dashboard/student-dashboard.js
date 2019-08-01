import styled from "styled-components";
import { colors } from '../Shared/variables';

export const GradesHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    margin: 20px 10px;

    img {
        width: 35px;
    }

    h3 {
        align-self: center;
        padding-left: 10px;
        color: ${colors.primary};
        font-size: 25px;
    }
`