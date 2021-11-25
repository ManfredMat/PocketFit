import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import NavIcon from './NavIcons';
import TestComponent from '../TestComponent';

const Stack = createBottomTabNavigator();

export default function InicioStack() {
    return (
        <>
                <Stack.Navigator 
                screenOptions={{tabBarActiveTintColor: 'green'}}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false, tabBarIcon:() => <NavIcon imgSrc={1}/>}}
                    />
                    <Stack.Screen
                        name="Stadistics"
                        component={TestComponent}
                        options={{ title: "Estadísticas", tabBarIcon:() => <NavIcon imgSrc={2}/>}}
                        
                    />
                    <Stack.Screen
                        name="Profile"
                        component={TestComponent}
                        options={{ title: "Perfil", tabBarIcon:() => <NavIcon imgSrc={3}/>}}
                    />
                    <Stack.Screen
                        name="Training"
                        component={TestComponent}
                        options={{ title: "Entrenamiento",tabBarIcon:() => <NavIcon imgSrc={4} size={35}/>}}
                        />
                    <Stack.Screen
                        name="Notifications"
                        component={TestComponent}
                        options={{ title: "Notificaciones", tabBarIcon:() => <NavIcon imgSrc={5}/>}}
                    />
                </Stack.Navigator>
        </>
    )
}
