import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";

export default function Home() {
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);
    const storeData = async (value) => {
        await AsyncStorage.setItem('isLogged', value)
    };

    const logOut = async () => {
        await AsyncStorage.removeItem("isLogged");
        navigation.navigate('Authentication')
        Alert.alert("", "Sesión cerrada exitosamente");
    }
    
    storeData("true")

    return (
        <View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    source={{uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'}} 
                    style={{width: 50, height: 50, margin: 3}}
                />
                <Text style={{marginLeft: 10, fontSize: 25}}>Hola {user?.name}!</Text>
                <TouchableOpacity style={{marginLeft: 40}} onPress={() => logOut()}><Text>LOGOUT</Text></TouchableOpacity>
            </View>

            <View style={{backgroundColor: '#fff', padding: 20, margin: 10}}> 
                <Text>Estadisticas</Text>
            </View>
            
            <View style={{backgroundColor: '#fff', height:'20%' ,padding: 20, margin: 10}}>
                <Text>Newsletter</Text>
            </View>

            <View style={{backgroundColor: '#fff', height:'20%', padding: 20, margin: 10}}>
                <Text>Tu rutina</Text>
            </View>

            <View style={{backgroundColor: '#fff', height:'20%', padding: 20, margin: 10}}>
                <Text>Clases</Text>
            </View>
        </View>
    )
}
