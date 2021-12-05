import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import {Container} from '../Training/Training.Styles'
import loading from '../../assets/loading.gif'
import MyShiftsCard from './MyShiftsCard'
import ShiftsAvailable from './ShiftsAvailable'
import { getAllShifts } from '../../redux/Actions/actions-Shifts'
import { useDispatch, useSelector } from 'react-redux';

const getAllShift = []
let obj2 = {id: 12323, day: 19, availability: 10, capacity: 15, beginning: 14, ending: 16, weekday: 'Miercoles', week: 1, month: 12, year: 2021}
getAllShift.push(obj2)
export default function Shifts() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dispatch = useDispatch()
    const getAll = useSelector((state)  => state.reducerShifts.allShifts)
    useEffect(() => {dispatch(getAllShifts(day, month, year))},[dispatch]);
    console.log()
    return ( 
        <Container>
            <ScrollView>
            <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, marginTop: 20 }}>Mis Turnos</Text>
            <View>
                {
            getAllShift.length > 0 
            ? getAllShift.map(e =>{
                return(
                 <View key={e.id} style={{alignItems: 'center'}}>
                    <MyShiftsCard 
                      id={e.id}
                      weekday={e.weekday} 
                      day={e.day}
                      month={e.month}
                      beginning={e.beginning}
                      ending={e.ending} 
                      year={e.year}/>
                 </View>
                )      
            })
            : <View  style={{display: 'flex', flexDirection: 'row' , width: '100%', backgroundColor: "#000", padding: 10}}>
                <Text>loading...</Text>
              </View>
                }
            </View>
            <View>
                <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, marginTop: 20 }}>Turnos disponibles</Text>
                <View>
                    {getAll.length !==0 ?
                     getAll.map(e => {
                         return (
                             <View key={e.id} style={{alignItems: 'center'}}>
                                 <ShiftsAvailable
                                  id={e.id}
                                  weekday={e.weekday}
                                  day={e.day}
                                  month={e.month}
                                  beginning={e.beginning}
                                  ending={e.ending}
                                  availability={e.availability}
                                  capacity={e.capacity}
                                  week={e.week}
                                  year={e.year}/>
                             </View>
                         )
                     })
                     : <Text style={{color: '#fff', alignSelf: 'center', marginTop: 50}}>Oops! hay turnos Disponibles...</Text>
                    }
                </View>
            </View>
          </ScrollView>
        </Container>
    )
}

export function PreVieShifts() {
    return(
        <View>
            {
            getAllShift.length !== 0 ? getAllShift.map(e => {
                return <View key={e.id}>
                     <Text style={{fontSize: 20}}>{e.weekday} {e.day}/{e.month}</Text>
                     <Text>{e.beginning}hs - {e.ending}hs</Text>
                </View>
            })
            : <Image style={{width: 100, height: 100, alignSelf: 'center'}}source={loading}/>
            }
        </View>
    )
}
