import React from 'react'
import { View, Text,   Dimensions, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import { ProgressChart, } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';

export default function Statistics() {
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const exercise = useSelector((state) => state.reducerTraining.stats)
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
        labels: ["Rutinas", "Clases", "Ejercicios"],
        data: [0.3, clases(), ejercicios()]
      };
    return (
        <View style={{backgroundColor: '#020E12', width: '100%', height: '100%', justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
            <Text style={{color:'#fff', fontSize: 20}}>Mi Progreso</Text>
            <ProgressChart
                data={data}
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
        </View>
    )
}