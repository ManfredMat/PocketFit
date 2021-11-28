import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'


const Green = '#6AE056'

export const Container = styled.View`
    display: flex;
    align-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: rgba(240, 248, 255, 0.250);
    margin: 20px;
    margin-top: 100px;
`
export const ButtonGreen = styled.TouchableOpacity`
    background-color: ${Green};
    border-radius: 17px;
    align-self: center;
    padding: 10px;
    height: 40px;
    width: 170px;
    margin-bottom: 20px;
`
export const ContainerBar = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
`
export const Styles = StyleSheet.create({
    Input: {
        backgroundColor: 'rgba(196, 196, 196, 1)',
        borderRadius: 16,
        marginBottom: -10
    },
})