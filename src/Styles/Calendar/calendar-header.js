import styled from "styled-components";
import { colors } from '../Shared/variables';

export const CalendarHeaderWrap = styled.div`
    width: 100%;
    padding: 5px;
    border-bottom: 3px solid ${colors.pink};
    box-shadow: 5px 5px 5px ${colors.gray};
`

export const HeaderWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
`

export const MonthWrap = styled.div`
    align-self: center;
    font-size: 26px;
    font-weight: bold;
    color: ${colors.primary};

    h3 {
        text-shadow: 3px 1px 1px ${colors.gray};
    }
`