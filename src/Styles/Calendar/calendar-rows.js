import styled from "styled-components";
import { colors } from '../Shared/variables';

export const CalendarWrap = styled.div`
    width: 99%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(5, 60px);
    grid-template-columns: repeat(7, auto);
`

export const CalItem = styled.div`
    border: 1px solid ${colors.gray};

    p {
        display: inline-block;
        position: relative;
        top: 40px;
        left: 30px;
    }

    ${({ active }) => active && `
        border: 1px solid ${colors.pink};
    `}
`