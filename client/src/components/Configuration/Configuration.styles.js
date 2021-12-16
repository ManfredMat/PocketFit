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

    ContainerRow: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    `,

    SubContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    // Box: styled.div`
    //     background-color: var(--darkBlue);
    //     display: flex;
    //     flex-direction: row;
    //     align-items: center;
    //     justify-content: space-between;
    //     width: 25rem;
    //     padding: 1rem;
    //     margin: .5rem;
    //     border-radius: 4rem;
    // `,

    NewsletterBox: styled.div`
        background-color: var(--darkBlue);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40rem;
        height: 25rem;
        padding: 1rem;
        margin: .5rem;
        border-radius: 1rem;
    `,

    NewsletterTitle: styled.h2`
        font-size: 1.5rem; 
        margin-left: 4.5rem; 
        margin-bottom: 1rem; 
        align-self: flex-start;
        color: white;
    `,

    NewletterSubject: styled.input`
        background-color: var(--green);
        border: none;
        border-radius: 1rem;
        margin-bottom: .5rem;
        padding: .5rem;
        width: 30rem;
        font-family: 'Poppins', sans-serif;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    NewletterBody: styled.textarea`
        width: 30rem;
        background-color: var(--green);
        padding: .5rem;
        resize: none;
        font-family: 'Poppins', sans-serif;
        border-radius: 1rem;
        &::placeholder {
            color: black;
        }
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
        align-self: flex-end;
        position: absolute;
        top: 85vh;
        right: 5vw;
        &:hover {
            cursor: pointer;
        }
    `,

    FileTitle: styled.h2`
        font-size: 1.5rem; 
        margin-left: 1.3rem; 
        margin-bottom: 1rem; 
        align-self: flex-start;
        color: white;
    `,

    FileBox: styled.div`
        background-color: var(--green-medium);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 25rem;
        padding: 1rem;
        margin: .5rem;
        border-radius: 1rem;
    `,
    
    InputImage: styled.input`
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

    NoImageContainer: styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
    `,

    AdminProfilePhoto: styled.img`
        height: 8rem;
        margin-top: 3rem;
        border-width: .25rem;
        border-color: var(--green);
        border-style: solid;
        object-fit: cover;
        border-radius: 50%;
    `,

}

export default Styles;