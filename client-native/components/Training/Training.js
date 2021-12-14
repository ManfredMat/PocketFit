import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Container, Routines, TextW, TextT, Excercise, ProxShifts, PagedContainer, ButtonShifts, ShiftsCont, Rounds, RoundsContainer} from './Training.Styles'
import arrow from '../../assets/arrow.png'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import { useNavigation } from '@react-navigation/core';
import { getAllWeekPlan } from '../../redux/Actions/actions-Training';
import { useDispatch } from 'react-redux';
import { PreViewShifts } from '../Shifts/Shifts';
import Blocks from './Blocks'
export default function Training() {
    //basics
    const dispatch = useDispatch()
    const navigation = useNavigation();
    useEffect(() => {dispatch(getAllWeekPlan())},[dispatch]);
    const [num, setNum] = useState(0)
    return (
        <Container>
            <TextT>Entrenamiento</TextT>
            <ScrollView>
                <TextW>Tu Rutina de hoy</TextW>
                <Routines>
                    <Excercise>
                        <View style={{width: 280}}>
                            <Text style={{fontSize: 20, color: '#fff', fontFamily:"Poppins_500Medium"}}>Bloque { num === 0 ? 'Uno': num === 1 ? 'Dos': num === 2 && 'Tres'}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={()=> num !==0 ? setNum(num - 1) : null}>
                                 <Image 
                                    source={arrowLeft} 
                                    style={{width:25, height: 25, marginRight: 7}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> num < 2 ? setNum(num + 1) : setNum(0)}>
                                 <Image 
                                    source={arrowRight} 
                                    style={{width:25, height: 25}}/>   
                            </TouchableOpacity>
                        </View> 
                    </Excercise>
                    <Blocks num={num}/>
                  <RoundsContainer>
                      <Rounds>
                          <Text style={{fontSize: 12}}>Rondas 2</Text>
                      </Rounds>
                  </RoundsContainer>
                </Routines>
                <TextW style={{marginBottom: 5}}>Próximo Turno</TextW>
                <ShiftsCont>
                        <PreViewShifts/>
                    <ButtonShifts onPress={() => navigation.navigate('Shifts')}>
                        <Image source={arrow} style={{alignSelf: 'center', width:30, height:30}}/>
                    </ButtonShifts>
                </ShiftsCont>
            </ScrollView>
        </Container>
    )
}
