import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Container, Routines, TextW, TextT, Excercise, ProxShifts, ButtonShifts, ShiftsCont} from './Training.Styles'
import arrow from '../../assets/arrow.png'
import { useNavigation } from '@react-navigation/core';
import { getAllWeekPlan } from '../../redux/Actions/actions-Training';
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../assets/loading.gif'
import CardExercise from './CardExercise'
import { PreVieShifts } from '../Shifts/Shifts';

export default function Training() {
    //basics
    const dispatch = useDispatch()
    const getAll = useSelector((state)  => state.reducerTraining.weekPlan)
    const navigation = useNavigation();
    useEffect(() => {dispatch(getAllWeekPlan())},[dispatch]);
    //Days of the week exercises
    const load = !Array.isArray(getAll) 
    const day = new Date().getDay()
    const [today, setToday] = useState([])
    const SetDay = () =>{
        if(load) {
        day === 1 ? setToday([getAll.monday]) : 
        day === 2 ? setToday([getAll.tuesday]) :
        day === 3 ? setToday([getAll.wendsday]) :
        day === 4 ? setToday([getAll.thursday]):
        day === 5 ? setToday([getAll.friday]):
        day === 6 ? setToday([getAll.saturday]) :
        day === 0 && setToday('No tienes nada para hoy, Descansa…') 
        }
    }
    setTimeout(() => {
        SetDay()
    }, 2021);
    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                { 
                typeof today === 'string' ? <Excercise><Text style={{alignSelf: 'center'}}>{today}</Text></Excercise> :
                today.length !== 0 
                    ? today[0].blocks[0].exercises?.map(e => {
                     return <Excercise key={e[3]}>
                                <CardExercise  reps={e[1]} exercise={e[0]}/>
                            </Excercise>
                    })
                    : 
                    <Excercise>
                        <Image style={{width: 100, height: 100, alignSelf: 'center'}}source={loading}/>
                   </Excercise>
                  }
                </Routines>
                {/* <View style={{marginTop: 15}}>
                    <TouchableOpacity onPress={() => alert('estamos trabajando en esta seccion')}>
                        <Text style={{alignSelf: 'center', color: "#6AE056"}}>Ver Mas...</Text>
                    </TouchableOpacity>
                </View> */}
                
                <TextW>Próximo Turno</TextW>
                <ShiftsCont>
                    <ProxShifts>
                        <PreVieShifts/>
                    </ProxShifts>
                    <ButtonShifts onPress={() => navigation.navigate('Shifts')}>
                        <Image source={arrow} style={{alignSelf: 'center', width:30, height:30, opacity: 0.8}}/>
                    </ButtonShifts>
                </ShiftsCont>
                <TextW>Próxima Clase</TextW>
                <ShiftsCont>
                    <ProxShifts>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <View style={{marginRight: 20, alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>Martes</Text>
                                <Text>18/12</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>Zumba</Text>
                                <Text>13hrs - 14hrs</Text>
                            </View>
                        </View>
                    </ProxShifts>
                    <ButtonShifts onPress={() => alert('estamos trabajando en esta sección')}>
                        <Image source={arrow} style={{alignSelf: 'center', width:30, height:30, opacity: 0.8}}/>
                    </ButtonShifts>
                </ShiftsCont>
            </ScrollView>
        </Container>
    )
}
