import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../Authentication/SignUp";
import Login from '../Authentication/Login';


const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <>
                <Stack.Navigator>
                    <Stack.Screen 
                       name="Login"
                       component={Login}
                       options={{ title: "Iniciar Sesion" }}
                    />
                    <Stack.Screen
                        name="SingUp"
                        component={SignUp}
                        options={{ title: "Registrarse" }}
                    /> 
                </Stack.Navigator>
        </>
    )
}
