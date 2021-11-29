import styled from 'styled-components/native'

//colors
const darkGrayBase = '#020E12'
const lime = '#CEFA1F'
const lemon = '#D9FB52'
const green = '#6AE056'

export const Container = styled.View`
    background-color: ${darkGrayBase};
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Routines = styled.View`
    background-color: ${green};
    border-radius: 15px;
    width: 370px;
    height: 200px;
    padding: 10px;
`
export const TextW = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
`
export const TextT = styled.Text`
    font-size: 40px;
    color: #fff;
    margin-top: 30px;
`
export const LemonContainer = styled.View`
    background-color: ${lemon};
    border-radius: 15px;
    width: 370px;
    height: 200px;
    padding: 10px;
`
