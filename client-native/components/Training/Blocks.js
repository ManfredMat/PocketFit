import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator} from 'react-native'
import { Excercise } from './Training.Styles'
import { getAllWeekPlan } from '../../redux/Actions/actions-Training';
import { useDispatch, useSelector } from 'react-redux';
import CardExercise from './CardExercise'



export default function Blocks({num}) {
    //basics
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getAllWeekPlan())},[dispatch]);
    const getAll = useSelector((state)  => state.reducerTraining.weekPlan)
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
    return (
        <View>
             { 
                typeof today === 'string' 
                    ? <Excercise>
                        <Text style={{alignSelf: 'center'}}>{today}</Text>
                    </Excercise> :
                today.length !== 0 
                    ? today[0] === undefined
                    ?  <Excercise>
                         <ActivityIndicator size="large" color="#6AE056" />
                       </Excercise>
                    :
                    num === 0 ?
                    today[0].blocks[0].exercises.map(e =>
                        <View  key={e[4]}>
                         <CardExercise 
                            reps={e[1]} 
                            exercise={e[0]}/>
                        </View>
                        )
                    :
                    num === 1 ?
                    today[0].blocks[1].exercises.map(e =>
                        <View key={e[4]} >
                         <CardExercise 
                           reps={e[1]} 
                           exercise={e[0]}/>
                       </View>
                        )
                    :
                    num === 2 &&
                    today[0].blocks[2].exercises.map(e =>
                        <View key={e[4]}>
                         <CardExercise  
                           reps={e[1]} 
                           exercise={e[0]}/>
                       </View>
                        )
                    : 
                    <Excercise>
                        <ActivityIndicator size="large" color="#6AE056" />
                   </Excercise>
                  }
        </View>
    )
}
