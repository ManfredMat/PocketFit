import styled from "styled-components/native";
const lime = '#CEFA1F' 
const green = '#6AE056';
const darkGrayBase = '#020E12'
const lemon = '#D9FB52'
export const Container = styled.View`
    background-color: ${darkGrayBase};
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Card = styled.View`
    background-color: ${green};
    border-radius: 15px;
    padding: 10px
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100px;
`
export const Button = styled.TouchableOpacity`
margin-top: 10px;
background-color: ${lime};
align-items: center;
justify-content: center;
border-radius: 15px;
width: 115px;
height: 35px;
`