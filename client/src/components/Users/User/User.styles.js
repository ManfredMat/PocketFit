import styled from "styled-components";

const Styles = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: var(--darkBlue);
        border-radius: 1rem;
        margin: .5rem;
        width: 13rem;
        padding-top: none;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        /* cursor: pointer;
        transition: .2s ease-in-out;
        &:hover {
            transform: scale(1.05);
        } */
    `,

    CardBanner: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: var(--green-medium);
        border-radius: 1rem;
        width: 13rem;
        padding-left: 1rem;
        padding-right: 1rem;
    `,

    UserNamesContainer: styled.div`
        color: white;
        &:hover {
            color: var(--yellow);
            cursor: pointer;
        }
    `,

    UserNames: styled.h2`
        margin: auto;
        font-weight: 600;
    `,

    TextUserContainer: styled.div`
        margin-top: .5rem;
        margin-bottom: .2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: -webkit-fill-available;
    `,

    TextUserKeys: styled.h4`
        color: white;
    `,

    TextUserValues: styled.h4`
        color: var(--green);
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
        height: 5rem;
        width: 5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: white;
        border-width: .25rem;
        border-color: var(--green);
        border-style: solid;
        /* &:hover {
            cursor: pointer;
            border-color: var;
        } */
    `,

    ProfileButton: styled.button`
        border-style: none;
        padding: 0;
        background-color: transparent;
        font-family: "Poppins";
        text-align: left;
    `,
}

export default Styles;