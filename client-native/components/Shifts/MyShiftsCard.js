import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Cards } from './Shifts.Styles'
import { deleteShiftId } from '../../redux/Actions/actions-Shifts'
import { useDispatch } from 'react-redux'


export default function MyShiftsCard({weekday, day , month, beginning, ending, year, id}) {
    const dispatch = useDispatch()
    const Remove = ()=> {
      dispatch(deleteShiftId(id))
    }


    return (
        <Cards>
            <View style={{width: '60%'}}>
                <Text style={{fontSize:20}}>{weekday} {day}/{month}/{year}</Text>
                <Text>{beginning}hs - {ending}hs</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: "30%"}} onPress={()=> Alert.alert('', '¿Quiere eliminar este turno?',
                         [{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'Si', onPress: () => Remove()}],{ cancelable: false })}>
                <Text style={{fontSize:30 , alignSelf: 'flex-end'}}>x</Text>
            </TouchableOpacity> 
        </Cards>
    )
}
