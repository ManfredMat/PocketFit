import styled from "styled-components";

const Styles = {
    Container: styled.div`
        top: 0;
        left: 0;
        position: fixed;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.8);
    `,

    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 1rem;
        height: 80%;
        width: 70%;
        align-items: center;
        background-color: var(--green-medium);
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

    CardTop: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--darkBlue);
        border-radius: 1rem;
        width: 100%;
        height: 35%;
    `,  

    CardTopInputsContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1.5rem;
    `,

    CardTopLabel: styled.label`
        color: var(--green);
        font-size: 1rem;
        margin-left: 3rem;
    `,

    CardTopInput: styled.input`
        padding: .5rem;
        border-radius: 2rem;
        border-style: hidden;
        width: 30%;
        background-color: var(--green);
        margin-left: 1rem;
        color: black;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    CardTopSelect: styled.select`
        margin-left: 1rem;
        border-radius: 2rem;
        border-style: hidden;
        padding: .5rem;
        width: 30%;
        background-color: var(--green);
        color: black;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    CardSelectOption: styled.option`
        color: black;
    `,

    CardBottom: styled.div`
        padding: 1rem;
        height: 65%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    CardTitle: styled.h1`
        color: white;
        margin-left: 3rem;
    `,

}

export default Styles;