import React from 'react'
import { View, Text,   Dimensions, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import { ProgressChart, } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';

export default function Statistics() {
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    let clases = myShift.length / 26
    const data = {
        labels: ["Rutinas", "Clases", "Ejercicios"],
        data: [0.7, clases, 0.8]
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