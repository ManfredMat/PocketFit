import styled from "styled-components";

export const PaymentList = styled.ul`

    li{
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        background-color: lightgray;
        padding: 0 1rem;
    }

`

export const PopWindow = styled.div`

    background-color: lightgray;
    border: solid;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 40vh;
    left: 6vw;
    
    input{
        width: 80vw;
        height: 1.5rem;
        margin: 0.5rem 1rem;
    }

    h3{
        margin-top: 1rem;
    }

    button{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

`

