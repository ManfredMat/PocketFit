import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-elements';
import { Excercise, ViewEX, Pesa } from './Training.Styles';
import pesa from '../../assets/pesa.png'

export default function CardExercise({reps, exercise}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
         <Excercise>
            <Switch
            style={{position:'absolute', alignSelf: 'flex-end'}}
            trackColor={{ false: "#767577", true: "#6AE056" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
            {
                isEnabled 
                ?<ViewEX>
                       <Text>COMPLETADO!</Text>
                       <Pesa source={pesa}/>
                 </ViewEX>
                : <ViewEX>
                    <Text>{exercise}</Text>
                    <Text style={{marginLeft: 40}}> Repeticiones: {reps}</Text>
                 </ViewEX>
            }
        </Excercise>
    )
}
