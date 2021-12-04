import React, { useState } from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { Cards } from './Shifts.Styles'
export default function ShiftsAvailable({weekday, day, month, availability, capacity, beginning, ending, week, year, id}) {
    const dispatch = useDispatch()
    const prueba = []
    const handleSubmmit = () => {
        let existe = prueba.find(e => e === id)
        existe === id ? () => alert("Ya te inscribiste a este turno")
        : prueba.push({
            day: day,
            beginning: beginning,
            ending: ending,
            weekday: weekday,
            week: week,
            month: month,
            year: year,
            id: id
        }) 
    }

    return (
     <Cards>
        <View style={{width: '60%'}}>
            <Text style={{fontSize:20}}>{weekday} {day}/{month}/{year}</Text>
            <Text>{beginning}hs - {ending}hs</Text>
            <Text style={{marginTop: 10}}>Disponibles: {availability} de {capacity}</Text>                             
        </View>
        <TouchableOpacity style={{ marginLeft: "30%"}} onPress={()=> Alert.alert('', '¿Quiere inscribirse a este turno?',
                                                                                         [{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                                                                         {text: 'OK', onPress: () => handleSubmmit()}],{ cancelable: false })}>
            <Text style={{fontSize:30 , alignSelf: 'flex-end'}}>+</Text>
        </TouchableOpacity> 
    </Cards>
    )
}
