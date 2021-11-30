import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Switch, Image } from 'react-native'
import { Container, Routines, TextW, TextT, LemonContainer, Excercise, ProxShifts, ViewEX, Pesa} from './Training.Styles'
import {ButtonGreen} from '../Authentication/Authentication.styles'
import { useNavigation } from '@react-navigation/core';
import pesa from '../../assets/pesa.png'
import { getAllExercises } from '../../redux/Actions/actions-Training';
import { useDispatch, useSelector } from 'react-redux';


export default function Training() {

    const getAll = useSelector((state)  => state.reducerTraining.exercise)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllExercises())},[])
    console.log(getAll)
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                    <ScrollView>

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
                            : <Text>q hacemo</Text>
                        }
                    </Excercise>
                    
                    </ScrollView>
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
