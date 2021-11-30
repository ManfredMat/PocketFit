import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Routines, TextW, TextT, LemonContainer, Excercise, ProxShifts } from './Training.Styles'
import {ButtonGreen} from '../Authentication/Authentication.styles'
import { useNavigation } from '@react-navigation/core';

export default function Training() {
    const navigation = useNavigation();


    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                    <ScrollView>
                    <Excercise>
                        <Text>q hacemo</Text>
                    </Excercise>
                    <Excercise>
                        <Text>q hacemo</Text>
                    </Excercise>
                    <Excercise>
                        <Text>q hacemo</Text>
                    </Excercise>
                    <Excercise>
                        <Text>q hacemo</Text>
                    </Excercise>
                    <Excercise>
                        <Text>q hacemo</Text>
                    </Excercise>
                    <Excercise>
                        <Text>q hacemo</Text>
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
