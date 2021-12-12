import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import loading from '../../assets/loading.gif'
import MyShiftsCard from './MyShiftsCard'
import ShiftsAvailable from './ShiftsAvailable'
import { getAllShifts, getShiftId } from '../../redux/Actions/actions-Shifts'
import { useDispatch, useSelector } from 'react-redux';
import { Cards, ContainerS } from './Shifts.Styles'

export default function Shifts() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dispatch = useDispatch()
    const getUserid = useSelector((state) => state.reducerUser.user.id)
    useEffect(()=>{dispatch(getShiftId(getUserid))},[dispatch])
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const getAll = useSelector((state)  => state.reducerShifts.allShifts)
    useEffect(() => {dispatch(getAllShifts(day, month, year))},[dispatch]);
    return ( 
        <ContainerS>
            <ScrollView>
            <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, marginTop: 20 }}>Mis Turnos</Text>
            <View>
                {
            myShift.length > 0 
            ? myShift.map(e =>{
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
            : <View style={{alignItems: 'center'}}>
                <Cards>
                    <Text style={{fontSize: 18, padding: 9}}>Parece que no tienes turnos agendados...</Text>
                </Cards>
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
                     : <Text style={{color: '#fff', alignSelf: 'center', marginTop: 50}}>Oops! No hay turnos Disponibles...</Text>
                    }
                </View>
            </View>
          </ScrollView>
        </ContainerS>
    )
}

export function PreViewShifts() {
    const dispatch = useDispatch()
    const getUserid = useSelector((state) => state.reducerUser.user.id)
    useEffect(()=>{dispatch(getShiftId(getUserid))},[dispatch])
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    return(
        <View>
            {
                myShift.length !== 0
                ?   <View>
                        <Text style={{fontSize: 20}}>{myShift[0].weekday} {myShift[0].day}/{myShift[0].month}</Text>
                        <Text>{myShift[0].beginning}hs - {myShift[0].ending}hs</Text>
                   </View>
                :
                <View>
                    <Image  style={{width: 100, height: 100, alignSelf: 'center'}} source={loading}/>
                </View>
            }
          
        </View>
    )
}
