import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home/Home';
import NavIcon from './NavIcons';
import Training from '../Training/Training';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import notifications from '../notifications/notifications';


const Stack = createBottomTabNavigator();

export default function InicioStack() {
    return (
            <>
                <Stack.Navigator
                    //'#020E12' 
                    initialRouteName= "Home"
                    screenOptions={{
                        tabBarActiveTintColor: '#6AE056', 
                        tabBarStyle: { 
                            borderTopColor: '#041D25',
                            position: 'absolute',
                            height: 65,
                            backgroundColor: '#041D25', 
                            borderRadius: 15, 
                            marginBottom: 5,
                            paddingBottom: 5,
                            paddingTop: 5,
                            paddingRight: 7,
                            paddingLeft:7,
                            margin: 10,
                        },
                    }}
            
                >
                     <Stack.Screen
                        name="Notificaciones"
                        component={notifications}
                        options={{ headerShown: false, 
                            tabBarIcon:({focused}) => (
                                <NavIcon 
                                    imgSrc={5} 
                                    focused={focused}
                                />
                            )
                        }}
                    />
                     <Stack.Screen
                        name="Perfil"
                        component={Profile}
                        options={{ headerShown: false, 
                            tabBarIcon:({focused}) => (
                                <NavIcon 
                                    imgSrc={3} 
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false, 
                            tabBarIcon:({focused}) => (
                                <NavIcon 
                                    imgSrc={1} 
                                    focused={focused}
                                />
                            )
                        }}
                    />
                     <Stack.Screen
                        name="Estadísticas"
                        component={Statistics}
                        options={{ headerShown: false, 
                            tabBarIcon:({focused}) => (
                                <NavIcon 
                                    imgSrc={2} 
                                    focused={focused}
                                />
                            )
                        }}
                        
                    />
                    <Stack.Screen
                        name="Entrenamiento"
                        component={Training}
                        options={{ headerShown: false, 
                            tabBarIcon:({focused}) => (
                                <NavIcon 
                                    imgSrc={4} 
                                    focused={focused}
                                />
                            )
                        }}
                    />
                </Stack.Navigator>
            </>
        
    )
}
