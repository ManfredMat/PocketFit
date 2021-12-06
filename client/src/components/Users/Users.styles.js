import styled from "styled-components";

const Styles = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        width:100vw;
        height: 100vh;
        background-color: var(--darkGray-base);
        overflow-y: scroll;
    `,

    NavBar: styled.div`
        background-color: var(--darkGray-base);
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
    `,

    SearchBar: styled.input`
        background-color: #C4C4C4;
        border-radius: 2rem;
        border-style: hidden;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding: .5rem;
        width: 20rem;
    `,

    SearchButton: styled.input`
        background-color: var(--green);
        border-radius: 1rem;
        border: none;
        padding: .6rem;
        width: 8rem;
        margin-top: 2rem;
        &:hover {
            cursor: pointer;
        }
    `,

    Filter: styled.select`
        background-color: var(--green);
        margin-left: 40vw;
        margin-right: 40vw;
        margin-bottom: 1rem;
    `,

    UsersContainer: styled.div`
        margin-left: 2vw;
        margin-right: 2vw;
    `,
}

export default Styles;