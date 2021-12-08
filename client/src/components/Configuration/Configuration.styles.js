import styled from "styled-components";

export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;

const Styles = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        width:100vw;
        height: 100vh;
        background-color: var(--darkGray-base);
        align-items: center;
        justify-content: center;
    `,

    Box: styled.div`
        background-color: #588A58;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 25rem;
        padding: 1rem;
        margin: .5rem;
        border-radius: 4rem;
    `,

    NewsletterBox: styled.div`
        background-color: #588A58;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40rem;
        padding: 1rem;
        margin: .5rem;
        border-radius: 4rem;
    `,

    NewsletterTitle: styled.h2`
        font-size: 1.5rem; 
        margin-left: 0; 
        margin-bottom: 1rem; 
        text-decoration: underline;
        color: white;
    `,

    NewletterSubject: styled.input`
        margin-bottom: .5rem;
        padding: .5rem;
        width: 25rem;
        font-family: 'Poppins', sans-serif;
        &:focus{
            outline: none;
        }
    `,

    NewletterBody: styled.textarea`
        padding: .5rem;
        resize: none;
        font-family: 'Poppins', sans-serif;
        border-radius: 1rem;
        &:focus{
            outline: none;
        }
    `,

    BoxText: styled.h3`
        color: white;
        margin-left: 1rem;
    `,

    CheckBoxWrapper: styled.div`
        position: relative;
        margin-right: 1rem;
    `,

    CheckBox: styled.input`
        opacity: 0;
        z-index: 1;
        border-radius: 15px;
        width: 42px;
        height: 26px;
        &:checked + ${CheckBoxLabel} {
            background: var(--green);
            &::after {
                content: "";
                display: block;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                margin-left: 21px;
                transition: 0.2s;
            }
        }
        `,

    GreenButton: styled.button`
        background-color: var(--green);
        border-radius: 1rem;
        border: none;
        padding: .6rem;
        width: 6rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        &:hover {
            cursor: pointer;
        }
    `,

    LogOutGreenButton: styled.button`
        background-color: var(--green);
        border-radius: 1rem;
        border: none;
        padding: .6rem;
        width: 10rem;
        margin-top: 2rem;
        &:hover {
            cursor: pointer;
        }
    `,
}

export default Styles;