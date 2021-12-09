import styled from "styled-components";

const Styles = {

    UsersGridContainer: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: .5rem;
        height: auto;
    `,

    NoUsersContainer: styled.div`
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    NoUsersText: styled.h1`
        color: white;
    `,

    BackButton: styled.button`
        background-color: var(--green);
        border-radius: 1rem;
        border: none;
        padding: .6rem;
        width: 8rem;
        margin-top: .5rem;
        &:hover {
            cursor: pointer;
        }
    `,

}

export default Styles;