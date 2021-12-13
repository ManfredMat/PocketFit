import styled from 'styled-components/native'

//colors
const darkGrayBase = '#020E12'
const lime = '#CEFA1F'
const lemon = '#D9FB52'
const green = '#6AE056'
const darkBlue = "#083645"
const dark = "#020E12"
export const Container = styled.View`
    background-color: ${darkGrayBase};
    width: 100%;
    height: 100%;
    padding-bottom: 78px;
`
export const Routines = styled.View`
    background-color: ${darkBlue};
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin: 15px;
    padding: 12px;
`
export const TextW = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
`
export const TextT = styled.Text`
    font-size: 30px;
    color: ${green};
    margin-top: 60px;
    margin-left: 20px;
`
export const LemonContainer = styled.View`
    background-color: ${lime};
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 370px;
    height: 100px;
`
export const Excercise = styled.View`
    border-radius: 15px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin: 5px;
    width: 340px;
    height: 55px;
    padding: 7px;
`
export const ProxShifts = styled.View`
    background-color: ${green};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 200px;
    height: 100px;
    padding: 10px;
    opacity: 0.9;
`
export const ViewEX = styled.View`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`
export const ButtonShifts = styled.TouchableOpacity`
    background-color: ${green};
    justify-content: center;
    border-radius: 15px;
    margin-left: 5px;
    height: 100px;
    width: 50px;
`
export const ShiftsCont = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
`
export const DarkContainer = styled.View`
    background-color: ${dark}
    border-radius: 10px;
    margin-right: 10px;
    padding: 8px;
`
export const RoundsContainer = styled.View`
    background-color: #0D5972;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 40px;
    width: 340px;
    padding: 7px;
    margin-top: 5px;
`
export const Rounds = styled.View`
    background-color: ${lime};
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    height: 25px;
    width: 90px;
`
export const PagedContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    width: 340px;
`