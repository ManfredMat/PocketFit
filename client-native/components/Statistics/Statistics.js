import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import { ProgressChart, } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';
import { Rounds, TextW } from '../Training/Training.Styles';
import {Data, GreenText, GreenTitle, BlueBox, Squats, Stats, Weight, Snatch, Pushup, BenchPress, Sprint} from './Statistics.Styles' 
import years from '../../assets/edad.png'
import weight from '../../assets/peso.png'
import height from '../../assets/altura.png'
import { Image } from 'react-native-elements';
export default function Statistics() {
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const exercise = useSelector((state) => state.reducerTraining.stats)
    const User = useSelector((state) => state.reducerUser.user)
   
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
                            <TouchableOpacity style={{alignSelf: 'flex-end', marginLeft: 230}}>
                                <Text style={{color:'#6AE056'}}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                        <Squats>
                        </Squats>
                        <View>
                            <Weight>
                            </Weight>
                            <Snatch>
                            </Snatch>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Pushup>
                            </Pushup>
                            <BenchPress>
                            </BenchPress>
                        </View>
                        <Sprint> 
                        </Sprint>
                    </View>
                </View>
            </ScrollView>
        </Stats>
    )
}