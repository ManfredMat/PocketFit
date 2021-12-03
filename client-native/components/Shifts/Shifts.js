import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Container} from '../Training/Training.Styles'
import { Excercise } from '../Training/Training.Styles'   

const getShift = [
    {day: 17},
    {availability: 10},
    {capacity: 15},
    {beginning: 14},
    {ending: 16},
    {weekday: 'Lunes'},
    {week: 1},
    {month: 12},
    {year: 2021}]

export default function Shifts() {
    return (
        <Container>
            <ScrollView>
            <Text style={{color: '#fff', fontSize: 20 }}>Mis Turnos</Text>
            <View>
                {/* {
            getShift.length !== 0 
            ? getShift.map(e =>{
                return <View style={{display: 'flex', flexDirection: 'row' ,backgroundColor: "#D9FB52", width: 100, height: 15}}>
                        <Text>{e.weekday}</Text>
                        <Text>{e.day}</Text>
                   </View>    
            })
            : <Excercise>
                <Text>loading...</Text>
              </Excercise>
                } */}
            </View>
          </ScrollView>
        </Container>
    )
}

export function PreVieShifts() {
    return(
        <View>
            <Text style={{fontSize: 20}}>Lunes 17/12</Text>
            <Text>14hrs-16hrs</Text>
        </View>
    )
}
