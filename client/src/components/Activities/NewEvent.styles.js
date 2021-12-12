import styled from "styled-components";

const Styles = {
    Container: styled.div`
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: row;
    `,

    Form: styled.form`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem
    `,

    SubContainer: styled.div`
        display: flex;
        flex-direction: row;
        gap: 1rem
    `,

    Column1: styled.div`
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,

    Column2: styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    InputImage: styled.input`
        padding: .5rem;
        border-radius: .5rem;
        border-style: hidden;
        background-color: var(--green);
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
        &::-webkit-file-upload-button {
            background-color: var(--darkBlue);
            border-radius: .3rem;
            border: none;
            padding: .3rem;
            color: white;
            &:hover {
                cursor: pointer;
            }
        }
    `,

    Description: styled.textarea`
        padding: .5rem;
        resize: none;
        font-family: 'Poppins', sans-serif;
        border-radius: 1rem;
        background-color: var(--green);
        border: none;
        &:focus{
            outline: none;
        }
    `,

    ButtonContainer: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
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
}

export default Styles;