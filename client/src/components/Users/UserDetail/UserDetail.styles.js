import styled from "styled-components";

const Styles = {
    Container: styled.div`
        background-color: rgba(0,0,0,0.8);;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    Card: styled.div`
        background-color: var(--darkBlue);
        border-radius: 1rem;
        height: 80%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    `,

    CloseButton: styled.button`
        border-style: none;
        background-color: var(--darkGray-base);
        border-radius: 50%;
        margin: 1rem;
        color: var(--green);
        position: absolute;
        bottom: 80vh;
        left: 80vw;
        width: 2rem;
        height: 2rem;
        font-family: "Poppins";
        font-weight: 600;
        font-size: 1rem;
        &:hover{
            cursor: pointer;
        }
    `,
    
    CardTop: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 90%;
        height: 30%;
    `,

    ProfilePhoto: styled.img`
        border-radius: 50%;
        object-fit: cover;
        height: 7rem;
        width: 7rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: ${(props) =>
            props.imageBackground ? "white" : "var(--green-medium)"};
        border-width: .25rem;
        border-color: var(--green);
        border-style: solid;
    `,

    UserNamesContainer: styled.div`
        color: white;
        margin-left: 2rem;
    `,

    UserNames: styled.h1`
        margin: auto;
        margin-top: -.5rem;
        font-size: 2rem;
    `,

    UserType: styled.h3`
        color: var(--green);
        margin-top: 0;
    `,

    ContactContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: -2rem;
        margin-left: 4rem;
    `,

    ContactInfoContainer: styled.div`
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
    `,

    ContactLink: styled.a`
        font-size: .9rem;
        color: white;
        &:hover{
            cursor: pointer;
            color: var(--yellow);
        }
    `,

    ContactIcon: styled.img`
        height: 1.8rem;
        width: 1.8rem;
    `,
            
    ContactValue: styled.h3`
        color: white;
    `,

    CardMiddle: styled.div`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 90%;
        height: 60%;
        align-items: center;
        justify-content: center;
    `,

    DataContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        width: 40%;
    `,
    
    Data: styled.div`
        display: flex;
        flex-direction: column;
        background-color: var(--green-medium);
        height: 100%;
        width: 90%;
        border-radius: 1rem;
        padding: 1rem;
    `,

    DataTitle: styled.h1`
        color: var(--green);
        font-weight: 600;
        margin-bottom: .5rem;
    `,

    DataInfoContainer: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,
    
    DataKey: styled.h3`
        color: white;
        margin-bottom: 1rem;
    `,

    DataValue: styled.h3`
        color: var(--darkBlue);
    `,

    DataValueContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1rem;
    `,

    DataButton: styled.button`
        background-color: var(--green);
        border-radius: 0.25rem;
        margin-left: .5rem;
        border: none;
        &:hover{
            cursor: pointer;
        }
    `,

    DataClassKey: styled.h3`
        color: white;
        margin-top: .5rem;
        font-weight: 500;
    `,

    DataClassValue: styled.h3`
        color: var(--green);
    `,

    StadisticsContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        width: 60%;
    `,

    DataSheet: styled.div`
        background-color: var(--green);
        height: 35%;
        width: 95%;
        border-radius: 1rem;
        padding: 1rem;
    `,

    DataSheetSubContainer: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 5rem;
        margin-top: .5rem;
    `,

    StadisticsInfoContainer: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    `,

    StadisticsKey: styled.h3`
        color: black;
    `,

    StadisticsValue: styled.h3`
        color: black;
        margin-left: .5rem;
    `,

    StadisticsTitle: styled.h1`
        color: var(--darkBlue);
        font-weight: 600;
    `,

    Stadistics: styled.div`
        background-color: var(--green);
        height: 65%;
        width: 95%;
        border-radius: 1rem;
        padding: 1rem;
    `,

    StadisticsSubContainer: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: flex-start;
        gap: .5rem;
        margin-top: .5rem;
    `,

    CardBottom: styled.div`
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        height: 10%;
        width: 90%;
        margin-left: 2rem;
    `,

    GreenButton: styled.button`
        color: var(--darkBlue);
        background-color: var(--green);
        border-radius: 1rem;
        border: none;
        padding: .5rem;
        width: 5rem;
        &:hover {
            cursor: pointer;
        }
    `,

}

export default Styles;