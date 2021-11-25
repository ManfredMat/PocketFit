import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home/Home';

const Stack = createBottomTabNavigator();

export default function InicioStack() {
    return (
        <>
                <Stack.Navigator initialRouteName="nav">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Landing"
                        component={() => <Text>Inicio</Text>}
                        options={{ title: "Pagina de inicio" }}
                    />
                    <Stack.Screen
                        name="SingUp"
                        component={() => <Text>calentamiento</Text>}
                        options={{ title: "tu rutina" }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={() => <Text>Iniciar Sesión</Text>}
                        options={{ title: "Iniciar Sesion" }}
                        />
                    <Stack.Screen
                        name="Profile"
                        component={() => <Text>Perfil</Text>}
                        options={{ title: "Perfil" }}
                    />
                </Stack.Navigator>
        </>
    )
}
