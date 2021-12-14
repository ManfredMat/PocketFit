import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import Styles from './Home.styles';


export default function Home() {
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);
    const storeData = async (value) => {
        await AsyncStorage.setItem('isLogged', value);
    };

    storeData("true");

    return (
        <Styles.Container>
            <ScrollView>
                <Styles.HeaderContainer>
                    <Styles.ProfileImage
                        source={
                            user.imageData ?
                                { uri: `data:image/jpeg;base64, ${user.imageData}` } :
                                require('../../assets/userIcon.png')
                        }
                    />
                    <Styles.NameLogoContainer style={{ marginLeft: 25 }}>
                        <Styles.HeaderText>Hola {user.name}!</Styles.HeaderText>
                        <Styles.GymLogo source={require("../../assets/fitnessgym-logo-home.png")} />
                    </Styles.NameLogoContainer>
                </Styles.HeaderContainer>
                
                <TouchableOpacity onPress={() => navigation.navigate("Estadísticas")}>
                    <Styles.ViewDetailedStats>Ver Más</Styles.ViewDetailedStats>
                </TouchableOpacity>
                <Styles.StatsContainer>
                    <Styles.CardStatsLightYellow>
                        <Styles.StatImage source={require("../../assets/backsquat-icon.png")}/>
                        <Styles.StatText>{user.backsquat}</Styles.StatText>
                    </Styles.CardStatsLightYellow>

                    <Styles.CardStatsYellow>
                        <Styles.StatImage style={{ width: 48, height: 50 }} source={require("../../assets/clean-icon.png")}/>
                        <Styles.StatText>{user.clean}</Styles.StatText>
                    </Styles.CardStatsYellow>

                    <Styles.CardStatsLightYellow>    
                        <Styles.StatImage style={{ width: 45, height: 45 }} source={require("../../assets/benchpress-icon.png")}/>
                        <Styles.StatText>{user.benchpress}</Styles.StatText>
                    </Styles.CardStatsLightYellow>

                    <Styles.CardStatsYellow>
                        <Styles.StatImage style={{ width: 40, height: 48 }} source={require("../../assets/pullups-icon.png")}/>
                        <Styles.StatText>{user.pullups}</Styles.StatText>
                    </Styles.CardStatsYellow>
                    
                    <Styles.CardStatsLightYellow>
                        <Styles.StatImage style={{ width: 45, height: 45 }} source={require("../../assets/snatch-icon.png")}/>
                        <Styles.StatText>{user.snatch}</Styles.StatText>
                    </Styles.CardStatsLightYellow>

                    <Styles.CardStatsYellow>
                        <Styles.StatImage style={{ width: 42, height: 45 }} source={require("../../assets/running-icon.png")}/>
                        <Styles.StatText>{user.running}</Styles.StatText>
                    </Styles.CardStatsYellow>
                </Styles.StatsContainer>
                <Styles.ActivitiesTitlesContainer>
                    <Styles.ActivityTitle style={{ marginLeft: 15 }}>Eventos</Styles.ActivityTitle>
                    <Styles.ActivityTitle style={{ marginRight: 25 }}>Feriados</Styles.ActivityTitle>
                </Styles.ActivitiesTitlesContainer>

                <Styles.ActivitiesContainer>
                    <Styles.EventContainer>
                        <Styles.EventTextContainer>
                            <Styles.EventTitle>El título de la publicación</Styles.EventTitle>
                            <Styles.EventDescription>Lorem Ipsum is simply dummy text</Styles.EventDescription>
                        </Styles.EventTextContainer>
                    </Styles.EventContainer>

                    <Styles.HollidayContainer>
                        <Styles.HollidayMonthContainer>
                            <Styles.HollidayDayContainer>
                                <Styles.HollidayDay>15</Styles.HollidayDay>
                            </Styles.HollidayDayContainer>
                            <Styles.HollidayMonth>Diciembre</Styles.HollidayMonth>
                        </Styles.HollidayMonthContainer>
                        <Styles.HollidayName>Nombre{"\n"}del Feriado</Styles.HollidayName>
                    </Styles.HollidayContainer>
                </Styles.ActivitiesContainer>

                <Styles.ActivitiesTitlesContainer>
                    <Styles.ActivityTitle style={{ marginLeft: 15 }}>Rutina de Hoy</Styles.ActivityTitle>

                    <TouchableOpacity style={{top: 8}} onPress={() => navigation.navigate("Entrenamiento")}>
                        <Styles.ViewDetailedRoutine>Ver Detalle</Styles.ViewDetailedRoutine>
                    </TouchableOpacity>
                </Styles.ActivitiesTitlesContainer>

                <Styles.RoutineContainer>
                    <Styles.BlocksContainer>

                        <Styles.BlockContainer>
                            <Styles.BlockSubContainer>
                                <Styles.BlockNumberContainer>
                                    <Styles.BlockNumber>1</Styles.BlockNumber>
                                </Styles.BlockNumberContainer>
                                <Styles.ExercisesContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 1</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 2</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 3</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                </Styles.ExercisesContainer>
                            </Styles.BlockSubContainer>
                        </Styles.BlockContainer>
                            
                        <Styles.BlockContainer style={{ backgroundColor: "#D9FB52" }}>
                            <Styles.BlockSubContainer>
                                <Styles.BlockNumberContainer>
                                    <Styles.BlockNumber>2</Styles.BlockNumber>
                                </Styles.BlockNumberContainer>
                                <Styles.ExercisesContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 1</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 2</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 3</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                </Styles.ExercisesContainer>
                            </Styles.BlockSubContainer>
                        </Styles.BlockContainer>
                        
                        <Styles.BlockContainer style={{ backgroundColor: "#E4FC82" }}>
                            <Styles.BlockSubContainer>
                                <Styles.BlockNumberContainer>
                                    <Styles.BlockNumber>3</Styles.BlockNumber>
                                </Styles.BlockNumberContainer>
                                <Styles.ExercisesContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 1</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 2</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                    <Styles.ExerciseContainer>
                                        <Styles.ExerciseName>EJERCICIO 3</Styles.ExerciseName>
                                    </Styles.ExerciseContainer>
                                </Styles.ExercisesContainer>
                            </Styles.BlockSubContainer>
                        </Styles.BlockContainer>
                    </Styles.BlocksContainer>

                    <Styles.RoutineTypeContainer>
                        <Styles.RoutineTypeTitle>Tipo de Rutina</Styles.RoutineTypeTitle>
                        <Styles.RoutineTypeSubContainer>
                            <Styles.RoutineTypeNumberContainer source={require("../../assets/routine-number-background.png")} />
                            <Styles.RoutineTypeNumber style={{ left: 19.5 }}>30</Styles.RoutineTypeNumber>
                            <Styles.RoutineTypeSubtitle style={{ textAlign: "right" }}>Repeticiones{"\n"}Totales</Styles.RoutineTypeSubtitle>
                        </Styles.RoutineTypeSubContainer>

                        <Styles.RoutineTypeSubContainer>
                            <Styles.RoutineTypeSubtitle>Cantidad De{"\n"}Ejercicios</Styles.RoutineTypeSubtitle>
                            <Styles.RoutineTypeNumberContainer source={require("../../assets/routine-number-background.png")} />
                            <Styles.RoutineTypeNumber style={{ left: 102 }}>15</Styles.RoutineTypeNumber>
                        </Styles.RoutineTypeSubContainer>
                    </Styles.RoutineTypeContainer>
                </Styles.RoutineContainer>
            </ScrollView>
        </Styles.Container>
    )
}
