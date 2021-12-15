import styled from "styled-components/native";
const lime = '#CEFA1F' 
const green = '#6AE056';
const darkGrayBase = '#020E12'
const lemon = '#D9FB52'
const blue = '#0D5972'
export const Container = styled.View`
    background-color: ${darkGrayBase};
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Card = styled.View`
    padding: 10px
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100px;
`
export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: ${blue};
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 115px;
    height: 35px;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    font-family: Poppins_500Medium;
    margin-top: 20px;
    margin-bottom: 6px;
`
export const Deadline = styled.View`
    background-color: ${lemon};
    border-radius: 15px;
    padding: 10px
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: 50px;
    padding-left: 20px;
`