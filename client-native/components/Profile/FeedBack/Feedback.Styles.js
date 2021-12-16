import styled from "styled-components/native";

const darkGrayBase = "#020E12";
const green = "#6AE056";
const greenMedium = "#588A58";
const yellow = "#E4FC82";
const darkBlue = "#083645"

export const Container = styled.View`
    background-color:${darkGrayBase}
    width: 100%;
    height: 100%;
    align-items: center;
`
export const Card = styled.View`
    background-color: ${darkBlue};
    border-radius: 15px;
    margin-top: 10%;
    width: 85%;
    height: 520px;
    padding: 10px
`
export const Input = styled.TextInput`
    background-color: ${yellow};
    margin:10px;
    border-radius: 15px;
    padding-left: 10px
`
export const Select = styled.View`
    background-color: ${green}
    border-radius: 15px;
    margin:10px;


`
export const Box = styled.View`
    background-color: ${yellow};
    margin:10px;
    border-radius: 15px;
    padding-left: 10px
`