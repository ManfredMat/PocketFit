import React, { useEffect, useState } from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Avariable } from './Shifts.Styles'
import {shiftRecord} from '../../api/put-shift'
import { getShiftId } from '../../redux/Actions/actions-Shifts'


export default function ShiftsAvailable({weekday, day, month, availability, capacity, beginning, ending, week, year, id}) {
    const dispatch = useDispatch()
    const getUserid = useSelector((state) => state.reducerUser.user.id)
    const handleSubmmit = () => {
        shiftRecord({
            idUser: getUserid,
            idShift: id,
            availability: availability
        }) 
       dispatch(getShiftId(id))
    }  
    console.log()
    return (
     <Avariable>
        <View style={{width: '60%'}}>
            <Text style={{fontSize:20}}>{weekday} {day}/{month}/{year}</Text>
            <Text>{beginning}hs - {ending}hs</Text>
            <Text style={{marginTop: 10}}>Disponibles: {availability} de {capacity}</Text>                             
        </View>
        <TouchableOpacity style={{ marginLeft: "30%"}} onPress={()=> 
             Alert.alert('', '¿Quiere inscribirse a este turno?',
                [{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Si', onPress: () => handleSubmmit()}],{ cancelable: false })}>
            <Text style={{fontSize:30 , alignSelf: 'flex-end'}}>+</Text>
        </TouchableOpacity> 
    </Avariable>
    )
}
