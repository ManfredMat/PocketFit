import styled from "styled-components";

const Styles = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #588A58;
        border-radius: 2rem;
        margin: .5rem;
        width: 13rem;
        padding: 1rem;
        /* cursor: pointer;
        transition: .2s ease-in-out;
        &:hover {
            transform: scale(1.05);
        } */
    `,

    User: styled.h2`
        color: white;
        margin: auto;
        &:hover {
            color: var(--yellow);
            cursor: pointer;
        }
    `,

    TextUser: styled.h4`
        color: white;
        margin-top: .5rem;
        margin-bottom: .2rem;
    `,

    Clases: styled.h4`
        color: white;
        margin-top: .5rem;
        margin-bottom: .2rem;
        &:hover {
            color: var(--yellow);
            cursor: pointer;
        }
    `,

    ProfilePhoto: styled.img`
        border-radius: 50%;
        object-fit: cover;
        height: 8rem;
        width: 8rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    `
}

export default Styles;