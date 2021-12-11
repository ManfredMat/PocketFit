import styled from "styled-components";

const Styles = {
    Container: styled.div`
        background-color: rgba(0,0,0,0.8);;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    Card: styled.div`
        background-color: var(--darkBlue);
        border-radius: 1rem;
        height: 80vh;
        width: 70vw;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    CloseButton: styled.button`
        border-style: none;
        background-color: var(--darkGray-base);
        border-radius: 50%;
        margin: 1rem;
        color: var(--green);
        position: absolute;
        bottom: 80vh;
        left: 80vw;
        width: 2rem;
        height: 2rem;
        font-family: "Poppins";
        font-weight: 600;
        font-size: 1rem;
        &:hover{
            cursor: pointer;
        }
    `,

    UserNames: styled.h1`
        color: white;
    `
}

export default Styles;