import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import {Container} from '../Training/Training.Styles'
import { Excercise } from '../Training/Training.Styles'   
import loading from '../../assets/loading.gif'
const getShift = [
    {day: 17, availability: 10, capacity: 15, beginning: 14, ending: 16, weekday: 'Lunes', week: 1, month: 12, year: 2021}]

export default function Shifts() {
    return (
        <Container>
            <ScrollView>
            <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, marginTop: 20 }}>Mis Turnos</Text>
            <View>
                {
            getShift.length !== 0 
            ? getShift.map(e =>{
                return <View style={{display: 'flex', flexDirection: 'row' , width: '100%', backgroundColor: "#000", padding: 10}}>
                        <View style={{backgroundColor: "#D9FB52", width: 100, height: 160, borderRadius: 15, padding: 10}}>
                            <Text>{e.weekday} {e.day}/{e.month}</Text>
                            <Text>{e.beginning}hs - {e.ending}hs</Text>
                        </View>
                   </View>    
            })
            : <Excercise>
                <Text>loading...</Text>
              </Excercise>
                }
            </View>
          </ScrollView>
        </Container>
    )
}

export function PreVieShifts() {
    return(
        <View>
            {
            getShift.length !== 0 ? getShift.map(e => {
                return <View>
                     <Text style={{fontSize: 20}}>{e.weekday} {e.day}/{e.month}</Text>
                     <Text>{e.beginning}hs - {e.ending}hs</Text>
                </View>
            })
            : <Image style={{width: 100, height: 100, alignSelf: 'center'}}source={loading}/>
            }
        </View>
    )
}
