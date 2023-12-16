import styled from "styled-components";
// import { Color } from "components/color/colorStatistic";

export const Container = styled.div`
font-family: 'Rubik Bubbles', cursive;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
     text-transform:capitalize;
    background: grey;
    border-radius: 5px;
    color: aqua;
    transition: 500ms;
    /* cursor: pointer; */
    &:hover{
        transform: scale(1.2);
    }
}
ul{
    display: flex;
    gap: 18px;
    font-size: 33px;
    
}
li{
    list-style: none;
}
span{
    color: green;
}

div>ul{
    flex-direction:column;
    align-items: center;
    
}
/* div>ul>li{
    &:last-child{
        color: {{Color()}};
    }
} */



`;
