import styled from "styled-components";
import { colors, media } from '../Shared/variables';

export const ClassUpdatesWrap = styled.div`
    width: 95%;
    margin: 20px auto;
`

export const UpdatesItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #eee;

    img {
        margin-right: 15px;
        width: 80px;
        height: auto;
    }
`

export const ContentWrap = styled.div`
    padding: 10px 0;
    width: 60%;
    display: flex;
    align-items: center;
`