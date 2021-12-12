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

    Title: styled.h1`
        color: white;
        margin-left: 5rem;
        margin-top: 1rem;
    `,

    NavBar: styled.div`
        background-color: var(--darkGray-base);
        /* position: ${(props) =>
            props.sticky ? "static" : "sticky"};
        top: 0; */
        display: flex;
        flex-direction: column;
    `,

    NavBarContainer: styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-left: 5rem;
        padding-right: 5rem;
        justify-content: space-evenly;
    `,

    SearchBarContainer: styled.form`
        display: flex; 
        flex-direction: row; 
        align-items: center;
    `,

    SearchBar: styled.input`
        background-color: var(--green);
        border-radius: 2rem;
        border-style: hidden;
        padding: .5rem;
        width: 20rem;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    SearchButton: styled.button`
        background-color: transparent;
        border: none;
        margin-left: .3rem;
        &:hover {
            cursor: pointer;
        }
    `,

    NavBarLabel: styled.h3`
        color: var(--green);
        margin-right: 1rem;
    `,

    SortContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,

    Sort: styled.select`
        background-color: var(--green);
        border-radius: 2rem;
        border-style: hidden;
        padding: .5rem;
        width: 12rem;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    FilterContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,

    Filter: styled.select`
        background-color: var(--green);
        border-radius: 2rem;
        border-style: hidden;
        padding: .5rem;
        width: 12rem;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,

    UsersContainer: styled.div`
        margin-left: 2vw;
        margin-right: 2vw;
    `,
}

export default Styles;