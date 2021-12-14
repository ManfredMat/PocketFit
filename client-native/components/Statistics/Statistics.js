import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import { ProgressChart, } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';
import { Rounds, TextW } from '../Training/Training.Styles';
import {Data, GreenText, GreenTitle, Ready, BlueBox, Squats, Stats, Weight, Snatch, Pushup, BenchPress, Sprint, NumTitle, StatsText} from './Statistics.Styles' 
import years from '../../assets/edad.png'
import weight from '../../assets/peso.png'
import height from '../../assets/altura.png'
import { Image } from 'react-native-elements';
import snatch from '../../assets/snatch-icon.png'
import running from '../../assets/running-icon.png'
import pullups from '../../assets/pullups-icon.png'
import backsquat from '../../assets/backsquat-icon.png'
import benchpress from '../../assets/benchpress-icon.png'
import clean from '../../assets/clean-icon.png'

export default function Statistics() {
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const exercise = useSelector((state) => state.reducerTraining.stats)
    const User = useSelector((state) => state.reducerUser.user)
    const [edit, setEdit] = useState(false)
    const clases = () => {
        let total = myShift.length / 26 
        if(total > 1){
            return 1
        } else {
            return total
        }
    }
    const ejercicios = () => {
        let total = exercise ? exercise / 365 : 0
        if(total > 1){
            return 1
        } else {
            return total
        }
    }

    const data = {
        data: [0.3, clases(), ejercicios()],
        colors:['rgba(206, 250, 31, 0.7)', 'rgba(217, 251, 82, 0.9)', 'rgba(106, 224, 86, 0.8)']
      };
    return (
        <Stats>
            <ScrollView>
                <Text style={{color:'#6AE056', fontSize: 25,  marginTop: 60, marginLeft: 10}}>Estadisticas</Text>
                <View style={{alignItems: 'center'}}>
                    <ProgressChart
                        data={data}
                        withCustomBarColorFromData={true}
                        width={Dimensions.get('window').width - 20}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#cefa1f',
                            backgroundGradientFrom: '#020E12',
                            backgroundGradientTo: '#020E12',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(206, 250, 31, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                            }}
                            style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            }}
                        />
                </View>
                <View>
                    <TextW>Ficha Tecnica</TextW>
                    <Data>
                    <BlueBox>
                        <GreenTitle>{User.age}</GreenTitle>
                        <View>
                            <Image 
                                style={{ width:34, height: 34}}
                                source={years}/>
                            <GreenText>Edad</GreenText>
                        </View>
                    </BlueBox>
                    <BlueBox>
                        <View>
                            <GreenTitle style={{marginBottom: -15}}>{User.weight}</GreenTitle>
                            <GreenTitle>kg</GreenTitle>
                        </View>
                        <View>
                            <Image 
                                style={{ width:35, height: 35}}
                                source={weight}/>
                            <GreenText>Peso</GreenText>
                        </View>
                    </BlueBox>
                    <BlueBox>
                        <View style={{marginLeft: 7}}>
                            <GreenTitle style={{marginBottom: -15}}>{User.height}</GreenTitle>
                            <GreenTitle>cm</GreenTitle>
                        </View>
                        <View>
                        <Image 
                            style={{ width:25, height: 31}}
                            source={height}/>
                            <GreenText>Altura</GreenText>
                        </View>
                    </BlueBox>
                    </Data>
                    <View style={{margin:15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextW>Datos</TextW>
                            { !edit ?
                            <TouchableOpacity 
                                onPress={() => setEdit(true)}
                                style={{alignSelf: 'flex-end', marginLeft: 230}}
                                >
                                <Text style={{color:'#6AE056'}}>Editar</Text>
                            </TouchableOpacity>
                            :
                            <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginLeft: "38%"}}>
                                <Ready onPress={() => setEdit(false)}>
                                    <Text>Cancelar</Text>
                                </Ready>
                                <Ready onPress={() => setEdit(false)}>
                                    <Text>Listo</Text>
                                </Ready>
                            </View>
                            }
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Squats>
                            <Image 
                                source={backsquat} 
                                style={{width: 31, height: 50}}/>
                                <NumTitle>{User.backsquat}</NumTitle>
                                <StatsText>Sentadillas</StatsText>
                        </Squats>
                        <View>
                            <Weight>
                                <Image 
                                    source={clean} 
                                    style={{width: 49, height: 52}}/>
                                <View style={{alignItems: 'center'}}>
                                    <NumTitle>{User.clean}</NumTitle>
                                    <StatsText>Cargadas</StatsText>
                                </View>
                            </Weight>
                            <Snatch> 
                                 <Image 
                                    source={snatch} 
                                    style={{width: 50, height: 50}}/>
                                 <View style={{alignItems: 'center'}}>
                                    <NumTitle>{User.snatch}</NumTitle>
                                    <StatsText>Arranques</StatsText>
                                 </View>
                            </Snatch>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Pushup>
                                <Image 
                                    source={pullups} 
                                    style={{width: 44, height: 50}}/>
                                <View style={{alignItems: 'center'}}>
                                    <NumTitle>{User.pullups}</NumTitle>
                                    <StatsText>Dominadas</StatsText>
                                 </View>
                            </Pushup>
                            <BenchPress>
                                 <Image 
                                    source={benchpress} 
                                    style={{width: 50, height: 50}}/>
                                 <View style={{alignItems: 'center'}}>
                                    <NumTitle>{User.benchpress}</NumTitle>
                                    <StatsText>Press de Banca</StatsText>
                                 </View>
                            </BenchPress>
                        </View>
                        <Sprint> 
                            <Image 
                                source={running} 
                                style={{width: 50, height: 52}}/> 
                                <StatsText>Marca de Tiempo</StatsText>   
                                <NumTitle>{User.running}</NumTitle>
                        </Sprint>
                    </View>
                </View>
            </ScrollView>
        </Stats>
    )
}