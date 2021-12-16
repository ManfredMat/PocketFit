import styled from "styled-components";

const Styles = {

    Container: styled.div`
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    `,

    Form: styled.form`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `,

    Grid: styled.form`
        display: grid;
        justify-items: stretch;
        grid-template-columns: 1fr 1fr;
        gap: .5rem 1rem;
    `,

    InputContainer: styled.div`
        display: flex;
        flex-direction: column;
    `,

    Label: styled.label`
        color: white;
        font-size: 1rem;
    `,

    Input: styled.input`
        padding: .5rem;
        border-radius: .5rem;
        border-style: hidden;
        background-color: var(--green);
        color: black;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    Select: styled.select`
        border-radius: .5rem;
        border-style: hidden;
        padding: .5rem;
        background-color: var(--green);
        color: black;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    Description: styled.textarea`
        padding: .5rem;
        resize: none;
        font-family: 'Poppins', sans-serif;
        border-radius: 1rem;
        background-color: var(--green);
        border: none;
        color: black;
        &:focus{
            outline: none;
        }
    `,

    ButtonContainer: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1rem;
    `,
    
    SubmitButton: styled.button`
        color: black;
        background-color: var(--green);
        border-radius: .5rem;
        border: none;
        padding: .5rem;
        width: 4rem;
        margin-top: .5rem;
        &:hover {
            cursor: pointer;
        }
    `,

    CancelButton: styled.button`
        color: white;
        background-color: var(--darkBlue);
        border-radius: .5rem;
        border: none;
        padding: .5rem;
        width: 5rem;
        margin-top: .5rem;
        &:hover {
            cursor: pointer;
        }
    `,

}

export default Styles;