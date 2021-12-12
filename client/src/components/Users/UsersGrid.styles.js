import styled from "styled-components";

const Styles = {

    UsersGridContainer: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
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

    PaginationContainer: styled.div`
        margin-bottom: 2rem;
        margin-top: 2rem;
    `,

    Pagination: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    `,

    PaginationButton: styled.button`
        border: none;
        width: 2rem;
        height: 2rem;
        border-radius: .3rem;
        font-family: "Poppins";
        font-weight: 500;
        font-size: 1rem;
        color: var(--darkBlue);
        background-color: ${(props) =>
            props.currentButton ? "var(--green)" : "var(--green-medium)"};
        &:hover{
            cursor: pointer;
        }
    `,
}

export default Styles;