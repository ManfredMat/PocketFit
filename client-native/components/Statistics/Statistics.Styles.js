import styled from "styled-components/native";
const lemo = "#E4FC82"
const Blue = "#083645"
const lima = '#CEFA1F'
const darkGray = '#020E12';

export const Stats = styled.View`
    background-color: ${darkGray}
    width: 100%;
    height: 100%;
    padding-bottom: 78px;
`
export const Data = styled.View`
    background-color: ${lemo};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    border-radius: 12px;
    width: 350px;
    height: 120px;
    margin-top: 10px;
`
export const BlueBox = styled.View`
    flex-direction: row;
    background-color: ${Blue};
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
`
export const Squats = styled.View`
    background-color: ${lima};
    border-radius: 12px;
    width: 100px;
    height: 200px;
`
export const Weight = styled.View`
    background-color: ${lima};
    border-radius: 12px;
    width: 228px;
    height: 90px;
    
`
export const Snatch  = styled.View`
    background-color: ${lemo};
    border-radius: 12px;
    width: 228px;
    height: 90px;
    margin-top: 20px;
    
`
export const Pushup  = styled.View`
    background-color: #D9FB52;
    border-radius: 12px;
    width: 163px;
    height: 90px;
    margin-top: 20px;
`
export const BenchPress  = styled.View`
    background-color: ${lima};
    border-radius: 12px;
    width: 163px;
    height: 90px;
    margin-top: 20px;
`
export const Sprint = styled.View`
    background-color: ${lemo};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    border-radius: 12px;
    width: 340px;
    height: 90px;
    margin-top: 20px;
`
export const GreenTitle = styled.Text`
    color: #CEFA1F
    font-size: 20px;
    margin-right:10px;
    font-family: "Poppins_500Medium";
`
export const GreenText = styled.Text`
    color: #CEFA1F
    font-size: 11px;
    margin-right:10px;
    font-family: "Poppins_400Regular";
`