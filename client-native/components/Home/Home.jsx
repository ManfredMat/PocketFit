import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import Styles from './Home.styles';


export default function Home() {
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);
    const holidays = useSelector((state) => state.reducerEvents.holidays);
    const events = useSelector((state) => state.reducerEvents.events);
    const todayRoutine = useSelector((state) => state.reducerRoutine.todayRoutine);

    const [currentEvent, setCurrentEvent] = useState(0);
    const [currentHoliday, setCurrentHoliday] = useState(0);

    const nextEvent = () => {
        events.length - 1 === currentEvent ? setCurrentEvent(0) : setCurrentEvent(currentEvent + 1)
    }

    const nextHoliday = () => {
        holidays.length - 1 === currentHoliday ? setCurrentHoliday(0) : setCurrentHoliday(currentHoliday + 1)
    }

    const exerciseNameShorter = (exerciseName) => {
        let newExerciseName = exerciseName.length > 14 ? exerciseName.slice(0, 11) + "..." : exerciseName
        return newExerciseName 
    }
    
    const storeData = async (value) => {
        await AsyncStorage.setItem('isLogged', value);
    };

    storeData("true");

    const getMonth = (monthNumber) => {
        let monthString = monthNumber.toString()
        switch (monthString) {
            case "01":
                return "Enero"
            case "02":
                return "Febrero"
            case "03":
                return "Marzo"
            case "04":
                return "Abril"
            case "05":
                return "Mayo"
            case "06":
                return "Junio"
            case "07":
                return "Julio"
            case "08":
                return "Agosto"
            case "09":
                return "Septiembre"
            case "10":
                return "Octubre"
            case "11":
                return "Noviembre"
            case "12":
                return "Diciembre"

            default:
                break;
        }
    }

    const getRepeticiones = () => {
        let repeticionesTotales = 0;
        for (let i = 0; i < todayRoutine.blocks.length; i++) {
            let repeticionesBloque = 0;
            for (let j = 0; j < todayRoutine.blocks[i].exercises.length; j++) {
               repeticionesBloque += todayRoutine.blocks[i].exercises[j][1] * todayRoutine.blocks[i].rounds
            };
            repeticionesTotales += repeticionesBloque
        }
        return repeticionesTotales
    }

    const getEjercicios = () => {
        let ejerciciosTotales = 0;
        for (let i = 0; i < todayRoutine.blocks.length; i++) {
            let ejercicios = 0;
            for (let j = 0; j < todayRoutine.blocks[i].exercises.length; j++) {
                ejercicios++
            };
            ejerciciosTotales += ejercicios
        }
        return ejerciciosTotales
    }


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
                    {holidays.length !== 0 && <Styles.ActivityTitle style={{ marginRight: 25 }}>Feriados</Styles.ActivityTitle>}
                </Styles.ActivitiesTitlesContainer>

                <Styles.ActivitiesContainer>
                    <Styles.EventContainer onPress={() => nextEvent()} holidays={holidays.length !== 0 ? true : false}>
                        <Styles.EventTextContainer>
                            <Styles.EventTitle>{events.length !== 0 && events[currentEvent].name ? events[currentEvent].name : "No hay eventos por el momento..."}</Styles.EventTitle>
                            <Styles.EventDescription>{events.length !== 0 && events[currentEvent].description ? events[currentEvent].description : null}</Styles.EventDescription>
                        </Styles.EventTextContainer>
                    </Styles.EventContainer>
                    {
                        holidays.length !== 0 &&
                        <Styles.HollidayContainer onPress={() => nextHoliday()}>
                            <Styles.HollidayMonthContainer>
                                <Styles.HollidayDayContainer>
                                    <Styles.HollidayDay>{holidays[currentHoliday].day ? holidays[currentHoliday].day : "-"}</Styles.HollidayDay>
                                </Styles.HollidayDayContainer>
                                <Styles.HollidayMonth>{holidays[currentHoliday].month ? getMonth(holidays[currentHoliday].month) : "-"}</Styles.HollidayMonth>
                            </Styles.HollidayMonthContainer>
                            <Styles.HollidayName>{holidays[currentHoliday].name ? holidays[currentHoliday].name : "-"}</Styles.HollidayName>
                        </Styles.HollidayContainer>
                    }
                </Styles.ActivitiesContainer>
                <Styles.SlidersIndicatorsContainer>
                    <Styles.EventSliderIndicatorContainer>
                        {events[0] && <Styles.CurrentSliderIndicator current={currentEvent === 0 ? true : false}></Styles.CurrentSliderIndicator>}
                        {events[1] && <Styles.CurrentSliderIndicator current={currentEvent === 1 ? true : false}></Styles.CurrentSliderIndicator>}
                        {events[2] && <Styles.CurrentSliderIndicator current={currentEvent === 2 ? true : false}></Styles.CurrentSliderIndicator>}
                    </Styles.EventSliderIndicatorContainer>

                    <Styles.HolidaySliderIndicatorContainer>
                        {holidays[0] && <Styles.CurrentSliderIndicator current={currentHoliday === 0 ? true : false}></Styles.CurrentSliderIndicator>}
                        {holidays[1] && <Styles.CurrentSliderIndicator current={currentHoliday === 1 ? true : false}></Styles.CurrentSliderIndicator>}
                        {holidays[2] && <Styles.CurrentSliderIndicator current={currentHoliday === 2 ? true : false}></Styles.CurrentSliderIndicator>}
                    </Styles.HolidaySliderIndicatorContainer>
                </Styles.SlidersIndicatorsContainer>
                
                {
                    todayRoutine === "Domingo" ?
                    <View>
                        <Styles.ActivitiesTitlesContainer>
                            <Styles.ActivityTitle style={{ marginLeft: 15 }}>Rutina de Hoy</Styles.ActivityTitle>
                        </Styles.ActivitiesTitlesContainer>
                        <Styles.ActivitiesTitlesContainer>
                            <Styles.ActivityTitle style={{ marginLeft: 15, marginTop: -4, color: "#6AE056" }}>Hoy es domingo... a descansar!</Styles.ActivityTitle>
                        </Styles.ActivitiesTitlesContainer> 
                    </View> :

                    todayRoutine === "Sin Rutina" ?
                    <View>
                        <Styles.ActivitiesTitlesContainer>
                            <Styles.ActivityTitle style={{ marginLeft: 15 }}>Rutina de Hoy</Styles.ActivityTitle>
                        </Styles.ActivitiesTitlesContainer>
                        <Styles.ActivitiesTitlesContainer>
                            <Styles.ActivityTitle style={{ marginLeft: 15, marginTop: -4, color: "#6AE056" }}>Sin rutina para el dia de hoy</Styles.ActivityTitle>
                        </Styles.ActivitiesTitlesContainer>
                    </View>:
                    <View>
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
                                                <Styles.ExerciseName>{todayRoutine.blocks[0].exercises[0] ? exerciseNameShorter(todayRoutine.blocks[0].exercises[0][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[0].exercises[1] ? exerciseNameShorter(todayRoutine.blocks[0].exercises[1][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[0].exercises[2] ? exerciseNameShorter(todayRoutine.blocks[0].exercises[2][0]) : "-"}</Styles.ExerciseName>
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
                                                <Styles.ExerciseName>{todayRoutine.blocks[1].exercises[0] ? exerciseNameShorter(todayRoutine.blocks[1].exercises[0][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[1].exercises[1] ? exerciseNameShorter(todayRoutine.blocks[1].exercises[1][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[1].exercises[2] ? exerciseNameShorter(todayRoutine.blocks[1].exercises[2][0]) : "-"}</Styles.ExerciseName>
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
                                                <Styles.ExerciseName>{todayRoutine.blocks[2].exercises[0] ? exerciseNameShorter(todayRoutine.blocks[2].exercises[0][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[2].exercises[1] ? exerciseNameShorter(todayRoutine.blocks[2].exercises[1][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                            <Styles.ExerciseContainer>
                                                <Styles.ExerciseName>{todayRoutine.blocks[2].exercises[2] ? exerciseNameShorter(todayRoutine.blocks[2].exercises[2][0]) : "-"}</Styles.ExerciseName>
                                            </Styles.ExerciseContainer>
                                        </Styles.ExercisesContainer>
                                    </Styles.BlockSubContainer>
                                </Styles.BlockContainer>
                            </Styles.BlocksContainer>

                            <Styles.RoutineTypeContainer>
                                <Styles.RoutineTypeTitleContainer>
                                    <Styles.RoutineTypeTitle>{todayRoutine.kindOfRoutine}</Styles.RoutineTypeTitle>
                                </Styles.RoutineTypeTitleContainer>
                                <Styles.RoutineTypeSubContainerContainer>
                                    <Styles.RoutineTypeSubContainer>
                                        <Styles.RoutineTypeNumberContainer source={require("../../assets/routine-number-background.png")} />
                                        <Styles.RoutineTypeNumber style={{ left: 19 }}>{getRepeticiones()}</Styles.RoutineTypeNumber>
                                        <Styles.RoutineTypeSubtitle style={{ textAlign: "right" }}>Repeticiones{"\n"}Totales</Styles.RoutineTypeSubtitle>
                                    </Styles.RoutineTypeSubContainer>

                                    <Styles.RoutineTypeSubContainer>
                                        <Styles.RoutineTypeSubtitle>Cantidad De{"\n"}Ejercicios</Styles.RoutineTypeSubtitle>
                                        <Styles.RoutineTypeNumberContainer source={require("../../assets/routine-number-background.png")} />
                                        <Styles.RoutineTypeNumber style={{ left: 105 }}>{getEjercicios()}</Styles.RoutineTypeNumber>
                                    </Styles.RoutineTypeSubContainer>
                                </Styles.RoutineTypeSubContainerContainer>
                            </Styles.RoutineTypeContainer>
                        </Styles.RoutineContainer>
                    </View>
                }
            </ScrollView>
        </Styles.Container>
    )
}
