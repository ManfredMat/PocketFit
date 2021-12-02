import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { 
    Container, Routines, TextW, TextT, LemonContainer, Excercise, ProxShifts, 
    ViewEX, Pesa, ButtonShifts, ShiftsCont} from './Training.Styles'
import arrow from '../../assets/arrow.png'
import {ButtonGreen} from '../Authentication/Authentication.styles'
import { useNavigation } from '@react-navigation/core';
import pesa from '../../assets/pesa.png'
import { getAllWeekPlan } from '../../redux/Actions/actions-Training';
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../assets/loading.gif'
import {MultipleSwitch} from './MultipleSwitch';


export default function Training() {
    let is = true
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
    console.log()
    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                  { 
                    today.length !== 0 ? today[0].blocks[0].exercises?.map(e => {
                        return (
                          <Excercise key={e[0]}>
                             {
                            //  is
                            //     ? <ViewEX>
                            //         <Text>COMPLETADO!</Text>
                            //         <Pesa source={pesa}/>
                            //         </ViewEX>
                            //     : 
                                <ViewEX>
                                    <Text>{e[0]}</Text>
                                    <Text style={{marginLeft: 80}}>reps: {e[1]}</Text>
                                </ViewEX>
                             }
                             <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
                                <MultipleSwitch/>
                             </View>
                          </Excercise>
                        )
                    })
                          : 
                         <Excercise>
                             <Image style={{width: 100, height: 100, alignSelf: 'center'}}source={loading}/>
                        </Excercise>
                  }
                </Routines>
                <View style={{marginTop: 15}}>
                    <TouchableOpacity onPress={() => alert('próximamente solo en cines')}>
                        <Text style={{alignSelf: 'center', color: "#6AE056"}}>Ver Mas...</Text>
                    </TouchableOpacity>
                </View>
                <TextW>Próximo Turno</TextW>
                <ShiftsCont>
                    <ProxShifts>
                        <Text>todos los turnos</Text>
                    </ProxShifts>
                    <ButtonShifts onPress={() => navigation.navigate('Shifts')}>
                        <Image source={arrow} style={{alignSelf: 'center', width:30, height:30, opacity: 0.8}}/>
                    </ButtonShifts>
                </ShiftsCont>
                <TextW>Próxima Clase</TextW>
                <ShiftsCont>
                    <ProxShifts>
                        <Text>hoy</Text>
                    </ProxShifts>
                    <ButtonShifts onPress={() => alert('trae las palomitas')}>
                        <Image source={arrow} style={{alignSelf: 'center', width:30, height:30, opacity: 0.8}}/>
                    </ButtonShifts>
                </ShiftsCont>
            </ScrollView>
        </Container>
    )
}