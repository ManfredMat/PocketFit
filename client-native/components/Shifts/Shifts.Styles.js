import styled from "styled-components/native";

const lemon = '#D9FB52'
const darkGrayBase = '#020E12'

export const ContainerS = styled.View`
    background-color: ${darkGrayBase};
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
`



export const Cards = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${lemon};
    border-radius: 10px;
    padding: 5px;
    width: 93%;
    margin: 5px;
`
export const Avariable = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${lemon};
    border-radius: 10px;
    padding: 5px;
    width: 93%;
    margin: 5px;
    opacity: 0.7;
`