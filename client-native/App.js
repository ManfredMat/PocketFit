import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import {styles} from "./App-Style"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="nav">

        <Stack.Screen name="nav" component={({navigation}) =>

           <View>
                <Button title="Landing" onPress={() => navigation.navigate('Landing')}/>
                <Button title="SingUp" onPress={() => navigation.navigate('SingUp')}/>
                <Button title="Login" onPress={() => navigation.navigate('Login')}/>
                <Button title="Home" onPress={() => navigation.navigate('Home')}/>
                <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>
          </View>
        }/>

        <Stack.Screen name="Landing" component={() => <Text>Inicio</Text>} options={{ title: 'Pagina de inicio' }}/>
        <Stack.Screen name="SingUp" component={() => <Text>Registrarse</Text>} options={{ title: 'Registrarse' }}/>
        <Stack.Screen name="Login" component={() => <Text>Iniciar Sesión</Text>} options={{ title: 'Iniciar Sesion' }}/>
        <Stack.Screen name="Home" component={() => <Text>Home</Text>} options={{ title: 'Home' }}/>
        <Stack.Screen name="Profile" component={() => <Text>Perfil</Text>} options={{ title: 'Perfil' }}/>

      </Stack.Navigator>

    </NavigationContainer>

  );
};
