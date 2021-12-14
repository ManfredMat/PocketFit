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
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    margin-left: 7px;
    margin-right: 12px;
    padding: 10px;
    width: 30%;
    height: 200px;
`
export const Weight = styled.View`
    background-color: ${lima};
    flex-direction: row;
    justify-content: space-around;
    border-radius: 12px;
    align-items: center;
    padding: 10px;
    width: 75%;
    height: 90px;
    
`
export const Snatch  = styled.View`
    background-color: ${lemo};
    flex-direction: row;
    border-radius: 12px;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    width: 75%;
    height: 90px;
    margin-top: 20px;
    
`
export const Pushup  = styled.View`
    background-color: #D9FB52;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 12px;
    align-items: center;
    padding: 10px;
    width: 47%;
    height: 90px;
    margin-top: 20px;
`
export const BenchPress  = styled.View`
    background-color: ${lima};
    flex-direction: row;
    justify-content: space-around;
    border-radius: 12px;
    align-items: center;
    padding: 10px;
    width: 47%;
    height: 90px;
    margin-top: 20px;
`
export const Sprint = styled.View`
    background-color: ${lemo};
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    align-self: center;
    border-radius: 12px;
    width: 97%;
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
export const NumTitle = styled.Text`
    font-size: 25px;
    font-family: "Poppins_600SemiBold";
`
export const StatsText = styled.Text`
    font-size: 12px;
    font-family: "Poppins_400Regular"
`
export const Ready = styled.TouchableOpacity`
    align-self: flex-end;
    align-items: center;
    margin-left: 7px;
    background-color: #6AE056;
    border-radius: 7px;
    width: 65px;
    height: 23px;
`