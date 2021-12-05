import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home/Home';
import NavIcon from './NavIcons';
import TestComponent from '../TestComponent';
import Training from '../Training/Training';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import notifications from '../notifications/notifications';
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
                        name="Estadísticas"
                        component={Statistics}
                        options={{ headerShown: false, tabBarIcon:() => <NavIcon imgSrc={2}/>}}
                        
                    />
                    <Stack.Screen
                        name="Perfil"
                        component={Profile}
                        options={{ headerShown: false, tabBarIcon:() => <NavIcon imgSrc={3}/>}}
                    />
                    <Stack.Screen
                        name="Entrenamiento"
                        component={Training}
                        options={{ headerShown: false, tabBarIcon:() => <NavIcon imgSrc={4} size={35}/>}}
                        />
                    <Stack.Screen
                        name="Notificaciones"
                        component={notifications}
                        options={{ headerShown: false, tabBarIcon:() => <NavIcon imgSrc={5}/>}}
                    />
                </Stack.Navigator>
        </>
    )
}
