import styled from "styled-components";

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