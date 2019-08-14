import styled from "styled-components";
import { colors } from '../../Shared/variables';

export const TeacherUpdateWrap = styled.div`
    width: 95%;
    margin: 0 auto;

    h1 {
        margin: 20px 0;
        font-size: 30px;
        color: ${colors.primary};
    }
`

export const ClassWrap = styled.div`
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    box-shadow: 3px 2px 3px lightgray;
`

export const FeedWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const TitleWrap = styled.div`
    font-size: 24px;
    color: ${colors.primary};
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    border-bottom: 1px solid ${colors.pink};
`

export const BackButton = styled.button`
    width: 90px;
    margin: 20px auto;
    border: 2px solid white;
    background-color: white;
    color: ${colors.pink};
    font-size: 20px;
    border-bottom: 2px solid ${colors.pink};

    :hover {
        border: 2px solid ${colors.pink};
    }
`

export const FeedItem = styled.div`
    margin: 20px auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    box-shadow: 4px 4px 5px ${colors.gray};
`

export const ImageWrap = styled.div`
    width: 100%;
    background-color: #F9F9F9;
    padding: 5px;
    margin: 0 auto 10px;
    text-align: center;
`

export const DateWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    font-size: 12px;
    color: grey;
`

export const ContentWrap = styled.div`
    width: 90%;
    margin: 0 auto 15px;
    padding: 5px;

    h4 {
        font-size: 20px;
        text-align: center;
        margin: 10px 0;
        padding-bottom: 2px;
        border-bottom: 1px solid ${colors.pink};
    }
`

export const LinksWrap = styled.div`
    width: 70%;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${colors.pink};

    p {
        padding: 5px;
        border: 1px solid ${colors.pink};
    }
`