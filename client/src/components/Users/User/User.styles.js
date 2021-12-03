import styled from "styled-components";

const Styles = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        background-color: #588A58;
        border-radius: 2rem;
        padding: .8rem;
        margin: .5rem;
        /* cursor: pointer; */
        transition: .2s ease-in-out;
        /* &:hover {
            transform: scale(1.05);
        } */
    `,

    User: styled.h2`
        color: white;
        &:hover {
            color: var(--yellow);
            cursor: pointer;
        }
    `,

    h4User: styled.h4`
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
        width: 50%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    `
}

export default Styles;