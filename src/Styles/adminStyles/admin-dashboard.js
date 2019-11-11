import styled from "styled-components";
import { colors } from '../Shared/variables';


export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 10px;

    h3 {
        align-self: center;
        padding-left: 10px;
        color: ${colors.primary};
        font-size: 25px;
    }

    img {
        width: 35px;
        height: auto;
    }
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TicketsWrapper = styled.div`
    width: 60%;
`

export const TicketCategoriesWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TicketCategoryWrap = styled.div`
    margin-top: 10px;
    background-color: ${colors.white};
    width: 150px;
    height: 150px;
    border: none;
    border-radius: 15px;
    box-shadow: 10px 10px 20px #eee;
    text-align: center;
    color: ${colors.pink};
    font-size: 22px;
    font-weight: bold;

    h4 {
        margin: 20px 0 10px;
        text-decoration: underline;
    }

    img {
        width: 75px;
        height: auto;
    }
`

export const EmployeesWrap = styled.div`
    width: 38%;
`

export const EmployeeCategoriesWrap = styled.div`
    width: 60%;
    margin: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`