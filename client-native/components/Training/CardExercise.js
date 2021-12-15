import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { Switch } from 'react-native-elements';
import { ViewEX, DarkContainer, Excercise } from './Training.Styles';
import { trainingStats } from '../../redux/Actions/actions-Training';
import { useDispatch } from 'react-redux';
export default function CardExercise({reps, exercise, key}) {
    const dispatch = useDispatch()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);

        setTimeout(() => {
            !isEnabled ? dispatch(trainingStats(1)) : null;   
        }, 1000);
    }
    
    return (
        <Excercise style={{ backgroundColor: isEnabled ? '#6AE056' : '#CEFA1F'}}>
                 <ViewEX>
                    <DarkContainer>
                        <Text style={{color:'#fff', fontSize: 12}}>{exercise}</Text>
                    </DarkContainer>
                    <Text style={{fontSize: 12, marginRight: 10}}> Repeticiones </Text>
                    <DarkContainer>
                            <Text style={{color: "#fff"}}>{reps}</Text>
                    </DarkContainer>
                 </ViewEX>
         <Switch
            trackColor={{ false: "#767577", true: "#020E12"}}
            thumbColor={isEnabled ? "#CEFA1F" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
        </Excercise>
    )
}
