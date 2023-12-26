import styled from "styled-components";




export const Container = styled.div`

font-family: 'Rubik Bubbles', cursive;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{text-transform:capitalize;
    background: grey;
    border-radius: 5px;
    color: aqua;
    transition: 500ms;
    cursor: alias;

    &:hover{
        transform: scale(1.2);
    }}

`