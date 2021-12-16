import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { ProgressChart, } from 'react-native-chart-kit'
import { useDispatch, useSelector } from 'react-redux';
import { TextW } from '../Training/Training.Styles';
import {Data, GreenText, GreenTitle, Ready, BlueBox, Squats, Stats, Weight, Snatch, Pushup, BenchPress, Sprint, NumTitle, StatsText, Styles} from './Statistics.Styles' 
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
import getUserId from '../../api/get-user'
import getUser, { PutUser } from '../../redux/Actions/actions-getUser'

export default function Statistics() {

    const dispatch = useDispatch()
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const exercise = useSelector((state) => state.reducerTraining.stats)
    const User = useSelector((state) => state.reducerUser.user)

    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState({
        age: User.age ? User.age.toString() : '0',
        weight: User.weight ? User.weight.toString(): '0' ,
        height: User.height ? User.height.toString(): '0',
        backsquat: User.backsquat ? User.backsquat.toString(): '15',
        clean:  User.clean ? User.clean.toString() : '30',
        snatch: User.snatch ? User.snatch.toString(): '40',
        pullups: User.pullups ? User.pullups.toString(): '10',
        benchpress: User.benchpress ? User.benchpress.toString() : '40',
        running: User.running ? User.running.toString(): '17'
    })

    const handleInputChange = (e, type) => {
        setInput({
          ...input,
          [type]: e.nativeEvent.text,
        });
      };

    const handleSubmit = async () => {
        dispatch(PutUser(User.id, input))
        const res = await getUserId(User.id);
        dispatch(getUser(res.data));
        setTimeout(() => {
            getUserId(User.id)
        }, 2000);
        setEdit(false)
    }


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
    const totalData = () => {
        let total = 
        parseInt(User.backsquat) + 
        parseInt(User.clean) + 
        parseInt(User.snatch) +
        parseInt(User.pullups) +
        parseInt(User.benchpress)
        return total / 365
    }
    const data = {
        labels: ["Clases", "Ejercicios", "General"],
        data: [clases(), ejercicios(), totalData()],
        colors:['rgba(206, 250, 31, 0.7)', 'rgba(217, 251, 82, 0.9)', 'rgba(106, 224, 86, 0.8)']
      };
    return (
        <Stats>
            <ScrollView>
                <Text style={{color:'#6AE056', fontSize: 25,  marginTop: 60, marginLeft: 10, fontFamily:"Poppins_500Medium"}}>Estadisticas</Text>
                <View style={{alignItems: 'center', right: 28}}>
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
                    <View style={{flexDirection: 'row'}}>
                        <TextW>Ficha Tecnica</TextW>
                    { !edit ?
                            <TouchableOpacity 
                                onPress={() => setEdit(true)}
                                style={{alignSelf: 'flex-end', marginLeft: '45%'}}
                                >
                                <Text style={{color:'#6AE056'}}>Editar</Text>
                            </TouchableOpacity>
                            :
                            <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginLeft: "20%"}}>
                                <Ready onPress={() => setEdit(false)}>
                                    <Text>Cancelar</Text>
                                </Ready>
                                <Ready onPress={() => handleSubmit()}>
                                    <Text>Listo</Text>
                                </Ready>
                            </View>
                            }
                    </View>
                    <Data>
                    <BlueBox>
                        {
                         !edit 
                         ?
                         <GreenTitle>{input.age}</GreenTitle>
                         :
                         <View>
                             <TextInput
                                style={Styles.Inp}
                                value={input.age}
                                onChange={(e)=> handleInputChange(e, "age")}
                                />
                         </View>
                        }
                        <View>
                            <Image 
                                style={{ width:34, height: 34}}
                                source={years}/>                  
                            <GreenText>Edad</GreenText>
                        </View>
                    </BlueBox>
                    <BlueBox>
                        <View>
                            {
                            !edit ?
                            <GreenTitle style={{marginBottom: -15}}>{input.weight}</GreenTitle>
                            :
                            <View style={{marginBottom: -6}}>
                                <TextInput
                                  style={Styles.Inp}
                                  value={input.weight}
                                  onChange={(e)=> handleInputChange(e, "weight")}
                                />
                             </View>
                            }
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
                            {
                            !edit?
                            <GreenTitle style={{marginBottom: -15}}>{input.height}</GreenTitle>
                            :
                            <View style={{marginBottom: -8}}>
                                <TextInput
                                  style={Styles.Input}
                                  value={input.height}
                                  onChange={(e)=> handleInputChange(e, "height")}
                                />
                             </View>
                            }
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
                        <View style={{marginLeft: -12}}>
                            <TextW>Datos</TextW>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Squats>
                            <Image 
                                source={backsquat} 
                                style={{width: 31, height: 50}}/>
                                {
                                 !edit?
                                 <NumTitle>{input.backsquat}</NumTitle>
                                 :
                                 <View>
                                    <TextInput
                                    style={Styles.InputDatos}
                                    inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                    value={input.backsquat}
                                    onChange={(e)=> handleInputChange(e, "backsquat")}
                                    />
                               </View>
                                }
                                <StatsText>Sentadillas</StatsText>
                        </Squats>
                        <View>
                            <Weight>
                                <Image 
                                    source={clean} 
                                    style={{width: 49, height: 52}}/>
                                <View style={{alignItems: 'center'}}>
                                    {
                                     !edit?
                                     <NumTitle>{input.clean}</NumTitle>
                                     :
                                     <View>
                                      <TextInput
                                        style={Styles.InputDatos}
                                        inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                        value={input.clean}
                                        onChange={(e)=> handleInputChange(e, "clean")}
                                        />
                                    </View>
                                    }
                                    <StatsText>Cargadas</StatsText>
                                </View>
                            </Weight>
                            <Snatch> 
                                 <Image 
                                    source={snatch} 
                                    style={{width: 50, height: 50}}/>
                                 <View style={{alignItems: 'center'}}>
                                     {
                                       !edit ?
                                       <NumTitle>{input.snatch}</NumTitle>
                                        :
                                        <View>
                                         <TextInput
                                            style={Styles.InputDatos}
                                            inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                            value={input.snatch}
                                            onChange={(e)=> handleInputChange(e, "snatch")}
                                            />
                                       </View>
                                     }
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
                                    {
                                        !edit ?
                                        <NumTitle>{input.pullups}</NumTitle>
                                        :
                                        <View>
                                         <TextInput
                                            style={Styles.InputDatos}
                                            inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                            value={input.pullups}
                                            onChange={(e)=> handleInputChange(e, "pullups")}
                                            />
                                       </View>
                                    }
                                    <StatsText>Dominadas</StatsText>
                                 </View>
                            </Pushup>
                            <BenchPress>
                                 <Image 
                                    source={benchpress} 
                                    style={{width: 50, height: 50}}/>
                                 <View style={{alignItems: 'center'}}>
                                     {
                                         !edit ?
                                         <NumTitle>{input.benchpress}</NumTitle>
                                         :
                                        <View>
                                         <TextInput
                                            style={Styles.InputDatos}
                                            inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                            value={input.benchpress}
                                            onChange={(e)=> handleInputChange(e, "benchpress")}
                                            />
                                       </View>
                                     }
                                    <StatsText>Press de Banca</StatsText>
                                 </View>
                            </BenchPress>
                        </View>
                        <Sprint> 
                            <Image 
                                source={running} 
                                style={{width: 50, height: 52}}/> 
                                    <StatsText>Marca de Tiempo</StatsText>   
                                {
                                    !edit ?
                                    <NumTitle>{input.running}</NumTitle>
                                    :
                                    <View>
                                         <TextInput
                                            style={Styles.InputDatos}
                                            inputContainerStyle={{ borderBottomWidth: 0, width: 50}}
                                            value={input.running}
                                            onChange={(e)=> handleInputChange(e, "running")}
                                            />
                                  </View>
                                }
                        </Sprint>
                    </View>
                </View>
            </ScrollView>
        </Stats>
    )
}