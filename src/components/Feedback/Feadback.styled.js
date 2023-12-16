import styled from "styled-components";




export const Container = styled.div`
font-family: 'Rubik Bubbles', cursive;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
    text-transform:capitalize;
    background: grey;
    border-radius: 5px;
    color: aqua;
    transition: 500ms;
    cursor: alias;

    &:hover{
        transform: scale(1.2);
    }
}
div{
    display: flex;
    gap:18px;
}
button{
    font-family: 'Rubik Bubbles', cursive;
    font-size: 13px;
    text-transform:uppercase;
    color: gray;
    width: 100px;
    height: 50px;
    cursor: cell;
    border: none;
    border-radius: 5px;
    transition: 500ms;
    &:hover{ background-color: greenyellow ;
    color: black;
transform: scale(1.2);}

    }
`