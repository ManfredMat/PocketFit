import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Switch, FlatList, Image } from 'react-native'
import { Container, Routines, TextW, TextT, LemonContainer, Excercise, ProxShifts, ViewEX, Pesa} from './Training.Styles'
import {ButtonGreen} from '../Authentication/Authentication.styles'
import { useNavigation } from '@react-navigation/core';
import pesa from '../../assets/pesa.png'
import { getAllWeekPlan } from '../../redux/Actions/actions-Training';
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../assets/loading.gif'

export default function Training() {

    const getAll = useSelector((state)  => state.reducerTraining.weekPlan)
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(getAllWeekPlan()),
        SetDay()
     },
        []);

    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const day = new Date().getDay()
    const [today, setToday] = useState()

    const SetDay = () =>{
        day === 1 ? setToday([getAll.monday]) : 
        day === 2 ? setToday([getAll.tuesday]) :
        day === 3 ? setToday([getAll.wendsday]) :
        day === 4 ? setToday([getAll.thursday]):
        day === 5 ? setToday([getAll.friday]):
        day === 6 ? setToday([getAll.saturday]) :
        day === 0 && setToday('No tienes nada para hoy, Descansa…') 
        console.log(!today)
    }
    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                  {
                    !today ? 
                        <Excercise>
                            <Image style={{width: 100, height: 100, alignSelf: 'center'}}source={loading}/>
                        </Excercise>

                          : today.map(e => {
                            return (
                              <Excercise>
                                  <Switch
                                       style={{position: 'absolute', alignSelf: 'flex-end'}}
                                       trackColor={{ false: "#767577", true: "#6AE056" }}
                                       thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                       onValueChange={toggleSwitch}
                                       value={isEnabled}/>
                                          {
                                            isEnabled 
                                            ? <ViewEX>
                                                 <Text>COMPLETADO!</Text>
                                                  <Pesa source={pesa}/>
                                               </ViewEX>
                                            : <ViewEX>
                                                <Text>dominadas</Text>
                                                <Text>3 x 10</Text>
                                            </ViewEX>
                                          }
                              </Excercise>
                            )
                        })
                  }
                </Routines>
                <View style={{marginTop: 15}}>
                    <ButtonGreen onPress={() => alert('próximamente solo en cines')}>
                        <Text style={{alignSelf: 'center'}}>Ver Mas...</Text>
                    </ButtonGreen>
                </View>
                <TextW>Próximo Turno</TextW>
                <LemonContainer>
                    <ProxShifts>
                        <Text>todos los turnos</Text>
                    </ProxShifts>
                </LemonContainer>
                <View style={{marginTop: 15}}>
                    <ButtonGreen onPress={() => navigation.navigate('Shifts')}>
                        <Text style={{alignSelf: 'center'}}>Ver Turnos</Text>
                    </ButtonGreen>
                </View>
                <TextW>Próxima Clase</TextW>
                <LemonContainer>
                    
                </LemonContainer>
                <View style={{marginTop: 15}}>
                    <ButtonGreen onPress={() => alert('trae las malomitas')}>
                        <Text style={{alignSelf: 'center'}}>Ver Clase</Text>
                    </ButtonGreen>
                </View>
            </ScrollView>
        </Container>
    )
}
